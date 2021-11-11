import styles from './Skills.module.css'
import SkillItem from './SkillItem'
import html from '../../public/images/tecnologies/html.svg'
import css from '../../public/images/tecnologies/css.svg'
import js from '../../public/images/tecnologies/javascript.svg'
import ts from '../../public/images/tecnologies/typescript.svg'
import react from '../../public/images/tecnologies/react.svg'
import next from '../../public/images/tecnologies/nextjs.svg'
import node from '../../public/images/tecnologies/nodejs.svg'
import express from '../../public/images/tecnologies/express.svg'
import mongo from '../../public/images/tecnologies/mongodb.svg'
import mysql from '../../public/images/tecnologies/mysql.svg'
import java from '../../public/images/tecnologies/java.svg'
import spring from '../../public/images/tecnologies/spring.svg'
import python from '../../public/images/tecnologies/python.svg'
import cshard from '../../public/images/tecnologies/cshard.svg'
import solidity from '../../public/images/tecnologies/solidity.svg'
import docker from '../../public/images/tecnologies/docker.svg'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState } from 'react';

const Skills = () => {

    const refComponent = useRef(null);
    const refTitle = useRef(null);
    const refList = useRef(null);
    const [applyAnims, setApplyAnims] = useState(false);
    const idAnim = 'skills-anim-';
    const size = 60;

    const addAnim = useCallback(() => {

        if(applyAnims){

            const theComponent = refComponent.current;
            const theTitle = refTitle.current;
            const theList = refList.current;
            const items = [...theList.querySelectorAll('li')];

            gsap.to(theTitle, {
                x: 100,
                scrollTrigger : {
                    id: `${idAnim}-1`,
                    trigger: theComponent,
                    start: "top center",
                    end: "+=100%",
                    // markers: true,
                    scrub: true,
                },
            });


            gsap.set(items, {
                autoAlpha: 0,
                y: 60
            });

            ScrollTrigger.batch(items, {
                trigger: items,
                start: "top+=40px bottom",
                // markers: true,
                id: `${idAnim}-item`,
                onEnter: items => {
                    gsap.to(items, {
                        autoAlpha: 1,
                        y: 0,
                        stagger: 0.15
                    });
                },
                once: true
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
                    ST && (ST.vars.id === `${idAnim}-item` ) && ST.kill();
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
    <section className={styles.skills_container} ref={refComponent}>
      <div className={styles.skills_content}>
        <h3 className={styles.skills_title}>
            <span className={styles.skills_title_span} ref={refTitle}>Skills</span>
        </h3>
        <ul className={styles.skills_list} ref={refList} >
          <SkillItem
            src={html}
            h={size}
            w={size}
            alt="html icon"
            name="html"
          />
          <SkillItem
            src={css}
            h={size}
            w={size}
            alt="css icon"
            name="css"
          />
          <SkillItem
            src={js}
            h={size}
            w={size}
            alt="javascript icon"
            name="javascript"
          />
          <SkillItem
            src={ts}
            h={size}
            w={size}
            alt="typescript icon"
            name="typescript"
          />
          <SkillItem
            src={react}
            h={size}
            w={size}
            alt="react icon"
            name="react"
          />
          <SkillItem
            src={next}
            h={size}
            w={size}
            alt="nextjs icon"
            name="nextjs"
          />
          <SkillItem
            src={node}
            h={size}
            w={size}
            alt="nodejs icon"
            name="nodejs"
          />
          <SkillItem
            src={express}
            h={size}
            w={size}
            alt="express icon"
            name="express"
          />
          <SkillItem
            src={mongo}
            h={size}
            w={size}
            alt="mongodb icon"
            name="mongodb"
          />
          <SkillItem
            src={mysql}
            h={size}
            w={size}
            alt="mysql icon"
            name="mysql"
          />
          <SkillItem
            src={java}
            h={size}
            w={size}
            alt="java icon"
            name="java"
          />
          <SkillItem
            src={spring}
            h={size}
            w={size}
            alt="spring icon"
            name="spring"
          />
          <SkillItem
            src={python}
            h={size}
            w={size}
            alt="python icon"
            name="python"
          />
          <SkillItem
            src={cshard}
            h={size}
            w={size}
            alt="cshard icon"
            name="c#"
          />
          <SkillItem
            src={solidity}
            h={size}
            w={size}
            alt="solidity icon"
            name="solidity"
          />
          <SkillItem
            src={docker}
            h={size}
            w={size}
            alt="docker icon"
            name="docker"
          />
        </ul>
      </div>
    </section>
  )
}

export default Skills
