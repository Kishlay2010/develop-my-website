<script setup lang="ts">

// This is the code that actually makes the website.

// It is split in 2 parts. You are currently reading the script. You can recognize it by the (<)script(>) and (<)/script(>) tags. The script opens the script and the /script closes the script.
// The other part is the template, which you recognize by the (<)template(>) and (<)/template(>)

// In your script you can define variables and actions. You can then bind those variables and actions to your template.

// Inside the script, lines that start with // are comments

// This is the name that is used for the header, change it to see what it does!
const name = 'Baldwin van Groos';

// We'll get to this part later in the masterclass
const email = ref("");
const showResponse = ref(false);
const sendingForm = ref(false);

async function submitForm() {
  sendingForm.value = true;
  // TODO: change this to your own endpoint
  const url = "https://script.google.com/macros/s/AKfycbxDTsaJbW8EsjTbYeSVNg_NSO1oIjSr39cO-urupvUEsBMm7yopkBjs27OfVD6O3jPssQ/exec";
  const response = await fetch(url, {
    method: "post",
    headers: {
      "Content-Type": "text/plain"
    },
    body: JSON.stringify({ email: email.value }),
    redirect: "follow"
  })
  if (response.ok) {
    showResponse.value = true;
  }
  sendingForm.value = false;
}
</script>
<template>
  <!-- We're now inside the template, here comments start with (<)!-- and and with --(>) -->
  <!-- We are starting this page with a card and specify that it has some margin at the bottom with class="mb-10" -->
  <VCard class="mb-10">
    <!-- Then we define the card title -->
    <VCardTitle class="d-flex align-center">
      <!-- An avatar provides a nice round circle around an image -->
      <VAvatar size="120" class="mr-4">
        <!-- This is an image, inside a tag we can use : before an attribute to refer to our variables -->
        <!-- alt is used to describe what an image is like in text. For example blind people can use that to understand what is actually on the image -->
        <VImg src="img/avatar.jpg" cover eager :alt="name" :title="name" />
      </VAvatar>
      <!-- h1, h2, h3, h4, h5 and h6 are all headers. h1 is the largest -->
      <h1>
        <!-- We can use {{  }} to refer to variables we defined in our script -->
        {{ name }}
      </h1>
    </VCardTitle>
    <VCardText>
      <!-- Here we enter text, feel free to add your own -->
      I'm a software developer by heart. Always striving to improve myself.
    </VCardText>
  </VCard>
  <VCard :loading="sendingForm">
    <!-- Below we are defining a form which people can use to leave their email, so you can contact them later on.
              Feel free to add some many fields as you like, just remember to also change the script in the sheet to enter them into the sheet
            -->
    <VCardTitle>Get in touch</VCardTitle>
    <VCardText>
      Leave your email
      <!-- With the @submit.prevent.stop="submitForm" we bind the submitForm function from the script to execute with the button in the form is clicked -->
      <VForm @submit.prevent.stop="submitForm">
        <!-- With the v-model we connect the email ref() to this email field. Whenever a user makes changes, those will be put into the email.value -->
        <VTextField label="Your email" v-model="email" />
        <VBtn type="submit" color="primary">Submit</VBtn>
      </VForm>
    </VCardText>
    <VSnackbar v-model="showResponse">I got your email and will get in touch soon!</VSnackbar>
  </VCard>
</template>
