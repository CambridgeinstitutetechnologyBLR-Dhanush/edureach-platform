import { sendMessage } from "./chat.service";

export const startVoiceConversation = async (
  name: string,
  course: string,
  topic: string
) => {
  const SpeechRecognition =
    (window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Please use Google Chrome.");
    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang = "en-IN";
  recognition.interimResults = false;
  recognition.continuous = true;

  const synth = window.speechSynthesis;

  const speak = (text: string) => {
    return new Promise<void>((resolve) => {
      const utterance = new SpeechSynthesisUtterance(text);

      utterance.lang = "en-IN";
      utterance.rate = 1;

      utterance.onend = () => resolve();

      synth.speak(utterance);
    });
  };

  await speak(
  `Hello ${name}. I can help you with ${course}. I understand your topic is ${topic}. Please ask your question.`
);

  recognition.onresult = async (event: any) => {
    const transcript =
      event.results[event.results.length - 1][0].transcript;

    console.log("User:", transcript);

    recognition.stop();

    try {
      const result = await sendMessage(transcript);

      console.log("AI:", result);

      // chat.service.ts returns { message: "..." }
      await speak(result.message);
    } catch (err) {
      console.error(err);
      await speak("Sorry. I could not answer your question.");
    }

    recognition.start();
  };

  recognition.onerror = (event: any) => {
    console.error("Speech Recognition Error:", event.error);
  };

  recognition.start();
};