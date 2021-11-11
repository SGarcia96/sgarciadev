import styles from './About.module.css'
import Avatar from './Avatar'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState } from 'react';

const About = () => {

    const refComponent = useRef(null);
    const refItemParallax1 = useRef(null);
    const refItemParallax2 = useRef(null);
    const [applyAnims, setApplyAnims] = useState(false);
    const idAnim = 'about-anim-';

    const addAnim = useCallback(() => {

        if(applyAnims){

            const theComponent = refComponent.current;
            const itemParallax1 = refItemParallax1.current;

            // ScrollTrigger.matchMedia({
            //     // large
            //     "(min-width: 1000px)": function() {
                    gsap.to(theComponent, {
                        scrollTrigger : {
                            id: `${idAnim}-1`,
                            trigger: theComponent,
                            start: "bottom bottom",
                            end: "+=100%",
                            // markers: true,
                            pin: true,
                            pinSpacing: false,
                            scrub: true,
                        },
                    });
            //     },
            // });

            gsap.to(itemParallax1, {
                x: 100,
                scrollTrigger : {
                    id: `${idAnim}-2`,
                    trigger: theComponent,
                    start: "top center",
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
    <section className={styles.about_section} ref={refComponent} >
        <div className={styles.about_content}>

            <h2 className={styles.about_title} >
                <span className={styles.about_title_span} ref={refItemParallax1}>About me</span>
            </h2>
            <Avatar
                src="/images/profile.jpg"
                alt="Steven García Avatar"
            />
        
            <div className={styles.about_description} >
                <h3 className={styles.title_text}>Profile</h3>
                <p>
                Hi! I&apos;m Steven, I am a software engineer from Spain who studied Software
                Engineering in UNED. I&apos;m an enthusiastic about Full Stack Development, AI, and
                Blockchain. My goal is make a better world, creating and improving solutions, developing
                a high quality code follows TDD/BDD, clean code, easy to maintain and extensible.
                </p>
                <h3 className={styles.title_text}>What can I do?</h3>
                <p>
                    <strong>Quickly adapt</strong> to whatever, I have used a wide range of languages, technologies and tools<br />
                    <strong>Software architecture</strong> (microservices, SOAP). <br />
                    <strong>Programming paradigms</strong> OOP, imperative, functional. <br />
                    <strong>Design patterns</strong> MVC, MVVC, Dependency Injection... <br />
                    <strong>Databases</strong> Administration and management of relational and non-relational. <br />
                    <strong>Data structures and algorithms</strong> graphs, big O notation, analysis and cost improvement. <br />
                    <strong>Soft skills</strong> Teamwork, Comunication, Multi-task... <br />
                    <strong>Strong problem-solving skills.</strong>
                </p>
            </div>

        </div>
    </section>
  )
}

export default About
