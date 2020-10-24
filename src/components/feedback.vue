<template>
    <div class="subscribe center">
        <div class="comment">
            <div class="comment_fase">
                <img class="fase" src="../assets/fase.png" alt="comment"></div>
            <div class="comment_text">
                <p class="comment__p"> “Vestibulum quis porttitor dui!
                    Quisque viverra nunc mi, a pulvinar purus condimentum a.
                    Aliquam condimentum mattis neque sed pretium”
                </p>
                <p class="place"><span class="name">Bin Burhan</span>
                    <br>Dhaka, Bd</p>
            </div>
        </div>
        <div class="subscribe__email">
            <h2 class="subscribe__content_h2">subscribe</h2>
            <h3 class="subscribe__content">FOR OUR NEWLETTER AND PROMOTION</h3>
            <form class="subscribe__form" action="#">
                <input class="input_email" type="email" required placeholder="Enter Your Email">
                <button class="Subscribe">Subscribe</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
  name: 'feedback',
};
</script>

<style>
</style>
