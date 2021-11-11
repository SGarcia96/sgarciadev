import styles from './Hero.module.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import SocialItem from './SocialItem'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState } from 'react';

const Hero = () => {

    const refComponent = useRef(null);
    const refItemParallax1 = useRef(null);
    const refItemParallax2 = useRef(null);
    const refItemParallax3 = useRef(null);
    const [applyAnims, setApplyAnims] = useState(false);
    const idAnim = 'hero-anim-';

    const addAnim = useCallback(() => {

        if(applyAnims){
            const theComponent = refComponent.current;
            const itemParallax1 = refItemParallax1.current;
            const itemParallax2 = refItemParallax2.current;
            const itemParallax3 = refItemParallax3.current;

            gsap.to(itemParallax1, {
                x: -200,
                delay: 0.1,
                scrollTrigger : {
                    id: `${idAnim}-1`,
                    trigger: theComponent,
                    start: "top top",
                    end: "+=100%",
                    // markers: true,
                    scrub: true,
                },
            });

            gsap.to(itemParallax2, {
                x: 200,
                delay: 0.2,
                scrollTrigger : {
                    id: `${idAnim}-2`,
                    trigger: theComponent,
                    start: "top top",
                    end: "+=100%",
                    // markers: true,
                    scrub: true,
                },
            });

            gsap.to(itemParallax3, {
                x: -100,
                delay: 0.3,
                scrollTrigger : {
                    id: `${idAnim}-3`,
                    trigger: theComponent,
                    start: "top top",
                    end: "+=100%",
                    // markers: true,
                    scrub: true,
                },
            });

            ScrollTrigger.refresh();
        }

    }, [applyAnims]);

    const removeAnim = useCallback(() => {

        if(applyAnims){
            let STs = ScrollTrigger.getAll();
            if(STs){
                STs.forEach(ST => {
                    ST && (ST.vars.id === `${idAnim}-1` ) && ST.kill();
                    ST && (ST.vars.id === `${idAnim}-2` ) && ST.kill();
                    ST && (ST.vars.id === `${idAnim}-3` ) && ST.kill();
                })
            }
        }
    }, [applyAnims]);

    useEffect(() => {

        document.fonts.ready.then(function () {
            setApplyAnims(true);
        });

    }, [])

    useEffect(() => {

        if(applyAnims){
            addAnim();
            return removeAnim;
        }

    }, [applyAnims])

    return (
        <section className={styles.hero_section} ref={refComponent}>
            <h1 className={styles.title} ref={refItemParallax1}>Steven García</h1>
            <h2 className={styles.subtitle} ref={refItemParallax2}>Software Engineer</h2>
            <div className={styles.hero_social} ref={refItemParallax3}>
                <SocialItem
                href="https://www.linkedin.com/in/sgarciadev/?locale=en_US"
                Icon={<FaLinkedin />}
                name="linkedin"
                />
                <SocialItem
                href="https://github.com/SGarcia96"
                Icon={<FaGithub />}
                name="github"
                />
            </div>
        </section>
    )
}

export default Hero
