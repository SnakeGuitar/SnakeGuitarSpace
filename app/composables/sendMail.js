export const useSendMail = () => {
  const isSending = ref(false);
  const result = ref(null);

  const sendEmail = async (formData) => {
    isSending.value = true;
    try {
      const response = await $fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      result.value = response;
      alert("Message sent successfully!");
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again later.");
    } finally {
      isSending.value = false;
    }
  }

  return { sendEmail, isSending, result }
}
