<template>
  <section id="contact">
    <div class="contact-inner section-inner">
      <UiSectionTitle :label="$t('contact.title_label')" :titleStart="$t('contact.title_start')" :titleEmphasis="$t('contact.title_emphasis')" />

      <div class="contact-grid">
        <div class="contact-info">
          <p>
            {{ $t('contact.desc') }}
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
            <label>{{ $t('contact.form.name') }}</label>
            <input type="text" name="name" :placeholder="$t('contact.form.name')" v-model="form.name" required />
          </div>
          <div class="form-group">
            <label>{{ $t('contact.form.email') }}</label>
            <input type="email" name="email" :placeholder="$t('contact.form.email')" v-model="form.email" required />
          </div>
          <div class="form-group">
            <label>{{ $t('contact.form.message') }}</label>
            <textarea name="message" rows="5" :placeholder="$t('contact.form.message')" v-model="form.message"
              required></textarea>
          </div>
          <UiButton as="button" variant="send" type="submit" :disabled="isSending">
            {{ isSending ? '...' : $t('contact.form.send') }}
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
