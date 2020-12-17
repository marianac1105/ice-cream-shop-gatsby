import React from 'react'
import HeroStyle from "./hero.module.css"
import { FaAsterisk } from "react-icons/fa";
import cx from 'classnames';

export default function Hero() {
    return (
        <section class={HeroStyle.hero} id="hero">
<div class="container">
<h2 class={HeroStyle.subHeadline}>
    <span class={HeroStyle.firstLetter}>W</span>elcome
</h2>
<h1 class={HeroStyle.headline}>The Ice Cream Shop</h1>
<div class={HeroStyle.headlineDescription}>
    <div class={HeroStyle.separator}>
        <div class={cx(HeroStyle.line, HeroStyle.lineLeft)}></div>
        <div class={HeroStyle.asterisk}>
            <FaAsterisk/>
        </div>
        <div class={cx(HeroStyle.line, HeroStyle.lineRight)}></div>

    </div>
    <div class="single-animation">
        <h5>Ready to be opened</h5>
        <button class={cx(HeroStyle.btn)}>Explore</button>
    </div>

</div>

</div>
        </section>
    )
}
