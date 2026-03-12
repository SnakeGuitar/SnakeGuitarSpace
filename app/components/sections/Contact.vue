<template>
  <section id="contact">
    <div class="contact-inner section-inner">
      <UiSectionTitle label="Contact" titleStart="Let's talk about" titleEmphasis="your project" />

      <div class="contact-grid">
        <div class="contact-info">
          <p>
            I am available for freelance projects, collaborations, and full-time opportunities.
            If you have something interesting in mind, drop me a message.
          </p>

          <div class="contact-links">
            <a href="mailto:snakersito08@gmail.com" class="contact-link-item">
              <span class="contact-link-icon">✉</span>
              snakersito08@gmail.com
            </a>
            <a :href="socialLinks.github" class="contact-link-item" target="_blank">
              <span class="contact-link-icon">⌥</span>
              github.com/SnakeGuitar
            </a>
            <a href="https://linkedin.com/in/snakeguitar" class="contact-link-item" target="_blank">
              <span class="contact-link-icon">◈</span>
              linkedin.com/in/snakeguitar
            </a>
          </div>
        </div>

        <form class="contact-form" @submit.prevent="handleSubmit">
          <input type="hidden" name="access_key" value="63bc9c78-244d-4c6e-a9f7-27d421922b81">

          <div class="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Your name" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="Your email" v-model="form.email" required />
          </div>
          <div class="form-group">
            <label>Message</label>
            <textarea name="message" rows="5" placeholder="Tell me about your project..." v-model="form.message"
              required></textarea>
          </div>
          <UiButton as="button" variant="send" type="submit" :disabled="isSending">
            {{ isSending ? 'Sending...' : 'Send Message' }}
          </UiButton>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { social } from '~/utils/portfolio'
import { useSendMail } from '~/composables/send-mail'

const socialLinks = social;
const { sendEmail, isSending } = useSendMail();

const form = ref({
  name: '',
  email: '',
  message: ''
});

const handleSubmit = async () => {
  const formData = new FormData();
  formData.append('access_key', '63bc9c78-244d-4c6e-a9f7-27d421922b81');
  formData.append('name', form.value.name);
  formData.append('email', form.value.email);
  formData.append('message', form.value.message);

  await sendEmail(formData);

  form.value.name = '';
  form.value.email = '';
  form.value.message = '';
};
</script>
