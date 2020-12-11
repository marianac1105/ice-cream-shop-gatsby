import React from 'react'
import HeroStyle from "./hero.module.css"

export default function Hero() {
    return (
        <section class={HeroStyle.hero} id="hero">
<div class="container">
<h2 class={HeroStyle.subHeadline}>
    <span class={HeroStyle.firstLetter}>W</span>elcome
</h2>
<h1 class={HeroStyle.headline}>The Ice Cream Shop</h1>
<div class={HeroStyle.headlineDescription}>
    <div class="separator">
        <div class="lin line-left"></div>
        <div class="asterisk">
            <i class="fas fa-asterisk"></i>
        </div>
        <div class="line line-right"></div>

    </div>
    <div class="single-animation">
        <h5>Ready to be opened</h5>
        {/* <a href="#" class="btn cta-btn"></a> */}
    </div>

</div>

</div>
        </section>
    )
}
