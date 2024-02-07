import React, { useEffect, useState } from 'react'

import Card from './Card'
import bookmark from "../Resources/Delete Bookmark.png"
import cloud from "../Resources/Download from the Cloud.png";
import ok from "../Resources/Ok.png";
import plus from "../Resources/Plus.png";
import { card_heading,card_content } from '../Resources/Contents.js';

export default function Body() {
const images =[bookmark,cloud,ok, plus];
const [readMore,setReadMore] = useState(false);
const [toggled,setToggled] = useState(false);
const scrollToElement = (elementId) => {
    
  const element = document.getElementById(elementId);
  
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function handleReadLess(){
  setReadMore(!readMore);
  setToggled(true);
}
useEffect(()=>{
  if(toggled && !readMore){
    setToggled(false);
    scrollToElement('readmoreview');
  }
},[toggled,readMore]);

const firstSentence = "Welcome to the ACFT Calculator, your reliable tool for assessing your performance in the Army Combat Fitness Test. Whether you're actively serving, preparing to enlist, or just aiming to keep fit, our calculator is designed to guide you through your fitness journey with ease and clarity.";
  return (
    <div className='bg-slate-200 pt-10' >
    <div  className='lg:w-7/12 md:w-2/3 w-11/12  mx-auto  flex flex-col items-center text-left space-y-10'>
      {readMore?
      <div className='h-96 overflow-auto border-3 border-black'>
        {/* heading 2.1 */}
        <div className='my-7'>
        <h2 className=' lg:text-4xl md:text-4xl sm:text-2xl text-xl'>
        ACFT Score Tool: Assess Your Army Combat Fitness Test Performance 
        </h2>
        <p className=' my-5 font-light  tracking-wide leading-8'>
        Welcome to the ACFT Calculator, your reliable tool for assessing your performance in the Army Combat Fitness Test. Whether you're actively serving, preparing to enlist, or just aiming to keep fit, our calculator is designed to guide you through your fitness journey with ease and clarity.
        </p>
        <p className=' my-5 font-light  tracking-wide leading-8'>
        The Army Combat Fitness Test is a comprehensive measure of strength, endurance, and agility - essential qualities for military readiness. Understanding your score is crucial in identifying areas for improvement and tracking your progress. Our calculator simplifies this process, using the latest ACFT scoring charts to give you an accurate assessment.
        </p>
        <p className=' my-5 font-light  tracking-wide leading-8'>
        With our user-friendly interface, calculating your score is straightforward. Enter your age, gender, and results for each of the six ACFT events:
        <em className='font-bold'> Maximum Deadlift, Standing Power Throw, Hand Release Push-Up, Sprint-Drag-Carry, Plank Hold,</em>
        and the 2-mile Run. Our system will do the rest, providing you with detailed feedback on each event.
        </p>
        <p className=' my-5 font-light  tracking-wide leading-8'>
        We believe in positive encouragement and realistic goal-setting. Even if your current scores are below standard, our calculator helps pinpoint where you need to focus, turning challenges into opportunities for growth. Regular use of this tool can motivate you to improve and ultimately achieve and exceed the ACFT standards.
        </p>
        <p className=' my-5 font-light  tracking-wide leading-8'>
        Start your journey to better fitness and readiness today with our ACFT Calculator. It's more than a score; it's a step towards reaching your best physical potential.
        </p>
        </div>

        {/* heading 2.2 */}
        <div className='my-7'>
        <h2 className=' lg:text-4xl md:text-4xl sm:text-2xl text-xl'>
        What is the ACFT Calculator
        </h2>
        <p className=' font-light my-5  tracking-wide leading-8'>
        The ACFT Calculator is an innovative online tool specifically designed for calculating scores of the Army Combat Fitness Test (ACFT), a critical fitness assessment used by the United States Army. This comprehensive test evaluates a soldier's physical strength, endurance, and agility, which are vital components for determining combat readiness. The calculator plays an essential role in helping both active soldiers and aspiring service members understand and evaluate their performance to the Army's rigorous physical standards.
        </p>
        <p className='  my-5 font-light  tracking-wide leading-8'>
        At its core, the ACFT Calculator allows users to input their performance data across the six events of the ACFT, which include the Maximum Deadlift (MDL), Standing Power Throw (SPT), Hand Release Push-Up (HRP), Sprint-Drag-Carry (SDC), Plank Hold (PLK), and the 2-Mile Run (2MR). This data is then processed to provide a numerical score, reflective of the user's physical capabilities, based on the latest scoring guidelines. These guidelines take into account factors like age and gender, ensuring that the evaluation is fair and tailored to each individual's demographic.

        </p>
        <p className=' my-5 font-light  tracking-wide leading-8'>
        One of the key advantages of using the ACFT Calculator is the immediate feedback it offers. Users can quickly see their scores for each event as well as their total score. This immediate assessment is crucial for identifying strengths and areas for improvement. By regularly using the calculator, individuals can track their progress over time, focus their training on weaker areas, and set realistic goals to improve their overall fitness level and readiness for the physical demands of military service.

        </p>
        </div>

        {/* heading 2.3 */}
        <div className='my-7'>
        <h2 className=' my-5 lg:text-4xl md:text-4xl sm:text-2xl text-xl'>
        How to Calculate an ACFT Score
        </h2>
        <p className=' my-5 font-light  tracking-wide leading-8'>
        
        Calculating an ACFT (Army Combat Fitness Test) score involves assessing performance across six distinct events, each designed to measure different aspects of physical fitness relevant to a soldier's effectiveness in a combat environment. Here’s a step-by-step guide on how to calculate the ACFT score:
        </p>
        <p className=' mt-5 text-lg  tracking-wide leading-8 font-medium text-gray-800'>
        Understand the Test Components: The ACFT consists of six events:</p>
        <div className=' mb-5 font-light  tracking-wide leading-8'>
          <ul className='list-disc pl-10'>
            <li>Maximum Deadlift (MDL)</li>
            <li>Standing Power Throw (SPT)</li>
            <li>Hand Release Push-up (HRP)</li>
            <li>Sprint-Drag-Carry (SDC)</li>
            <li>Leg Tuck (LTK) or Plank (PLK) for alternate event</li>
            <li>2-Mile Run (2MR)</li>
            <li><span className='font-semibold text-gray-700'>Perform the Test:</span> Each soldier must complete these events under standardized conditions. The performance in each event is then recorded.</li>
            <li><span className='font-semibold text-gray-700'>Score Each Event:</span> The performance in each event is scored based on criteria that include the number of repetitions, distance, or time achieved. These scores are typically based on tables provided by the Army, which set different scoring standards for different age groups and genders.</li>
            <li><span className='font-semibold text-gray-700'>Total the Scores:</span> After scoring each event, sum these individual scores to get the total ACFT score.</li>
            <li><span className='font-semibold text-gray-700'>Assess Against Standard:</span> Compare the total score against the minimum requirements. The ACFT has undergone several revisions, with the most recent versions focusing on a pass/fail outcome. This means that a soldier must meet or exceed the minimum score threshold set by the Army to pass.</li>
            <li><span className='font-semibold text-gray-700'>Consider MOS and Unit Requirements:</span> The test standards also reflect the varied physical demands of different Military Occupational Specialties (MOS) and unit requirements. Some units or MOS may have higher physical fitness standards based on their specific operational demands.</li>
          </ul>
        </div>
        <p className=' my-5 font-light  tracking-wide leading-8'>
        
        It's important to note that the ACFT is not just about meeting minimum standards; it aims to encourage continuous physical development and readiness for the physically demanding nature of military operations. The test's design reflects the physical requirements of combat roles and the necessity for soldiers to be prepared for a wide range of physical challenges. Regular training and preparation are essential for success in the ACFT.
        </p>
        </div>
        
        {/* heading 2.4 */}
        <div className='my-7'>
        <h2 className=' lg:text-4xl md:text-4xl sm:text-2xl text-xl'>
        ACFT Events Calculation Method
        </h2>
        <p className=' my-5 font-light  tracking-wide leading-8'>
        The Army Combat Fitness Test (ACFT) in 2024 continues to assess the physical readiness of soldiers through a series of events, each designed to evaluate different aspects of fitness essential for combat. The test consists of the following six events:
        </p>
        <div className=' my-5 font-light  tracking-wide leading-8'>
            <ul className='list-disc pl-10'>
              <li><span className='font-semibold text-gray-700'>Three-Repetition Maximum Deadlift (MDL)</span> This event tests lower body strength and involves lifting a weight off the ground for three consecutive repetitions.</li>
              <li><span className='font-semibold text-gray-700'>Standing Power Throw (SPT):</span> This event assesses explosive power. Soldiers throw a 10-pound medicine ball backwards and overhead for distance.</li>
              <li><span className='font-semibold text-gray-700'>Hand-Release Push-Up (HRP):</span>  Focused on upper body endurance, this push-up variation includes a hand release at the bottom of the movement.</li>
              <li><span className='font-semibold text-gray-700'>Sprint-Drag-Carry (SDC):</span> This event is a five-part, 250-meter course that tests speed, agility, and muscular endurance.</li>
              <li><span className='font-semibold text-gray-700'>Plank Hold (PLK):</span>Replacing the Leg Tuck event in 2022, the Plank Hold is used to evaluate core strength. Soldiers must maintain a plank position for a minimum duration to pass.</li>
              <li><span className='font-semibold text-gray-700'>Two-Mile Run (2MR):</span> This event tests aerobic endurance, where soldiers run two miles as quickly as possible.</li>
            </ul>
          </div>
          <p className=' my-5 font-light  tracking-wide leading-8'>
          For soldiers on a “permanent profile” due to physical limitations, four alternate aerobic events are available: a 2.5-mile walk, 12 km stationary bike, 1 km swim, or a 5 km row. These alternatives ensure that all soldiers can demonstrate their aerobic capacity in a manner that accommodates their physical condition. Soldiers on a “temporary profile” are expected to recover and recondition before attempting the standard events of the ACFT.
          </p>
          <p className=' my-5 font-light  tracking-wide leading-8'>
          The ACFT standards and events are periodically reviewed and updated to ensure they accurately reflect the physical demands of modern military operations and the diverse roles within the Army. As of 2024, these events represent the current standard for evaluating the physical fitness and combat readiness of U.S. Army soldiers.

          </p>
        </div>
        {/* heading 2.5 */}
        <div className='my-7'>
          <h2 className=' lg:text-4xl md:text-4xl sm:text-2xl text-xl'>
          Understanding ACFT Scoring
          </h2>
          <p className=' my-5 font-light  tracking-wide leading-8'>
          Scoring well on the Army Combat Fitness Test (ACFT) is crucial for every soldier's career progression and personal growth. In the ACFT, achieving a minimum score of 60 points in each of the six events is essential to pass. These events include the Three-Repetition Maximum Deadlift, Standing Power Throw, Hand-Release Push-Up, Sprint-Drag-Carry, Plank Hold, and Two-Mile Run. Excelling in each event can lead to a maximum total score of 600 points – a perfect 100 in each event.
          </p>
          <p className=' my-5 font-light  tracking-wide leading-8'>
          To determine your ACFT score, simply perform each event to the best of your ability and then refer to the standard score chart. This chart allocates points based on your performance results for each event. Add up the points from all six events to get your total ACFT score. Remember, scoring at least 60 points in each event is mandatory to pass, regardless of your total score.
          </p>
          <p className=' my-5 font-light  tracking-wide leading-8'>
          Scores are officially recorded on the Army Combat Fitness Test Scorecard – DA Form 705. It's noteworthy that the latest version of the ACFT includes norming by gender and age group, a significant update from previous versions, ensuring a fair and equitable assessment for all soldiers.
          </p>
          <p className=' my-5 font-light  tracking-wide leading-8'>
          In the spirit of continuous improvement and resilience, if a soldier does not meet the ACFT standards, it's a signal for focused training and determination. Soldiers who do not pass the ACFT receive support and guidance to improve their fitness levels. The goal is always to help every soldier succeed and excel. Failing the ACFT is not the end but rather a motivator to strive harder and come back stronger. Remember, the ACFT is not just a test but a journey towards achieving peak physical fitness and combat readiness.
          </p>
        </div>
        {/* heading 2.6 */}
        <div className='my-7'>
          <h2 className=' lg:text-4xl md:text-4xl sm:text-2xl text-xl'>
          ACFT Scoring Scales: Understanding Your Fitness Assessment
          </h2>
          <p className=' my-5 font-light  tracking-wide leading-8'>
            The Army Combat Fitness Test (ACFT) sets a high benchmark for physical fitness, reflecting the intense demands of military service. The ACFT Scoring Scales are an integral part of this test, providing clear, standardized criteria for evaluating the physical prowess of soldiers. These scales detail the minimum and maximum scores achievable in the test, tailored to both males and females across different age groups. This ensures a fair and comprehensive assessment, considering the varied capabilities and fitness levels of individuals.
          </p>
          <p className=' my-5 font-light  tracking-wide leading-8'>
            The scoring system is designed not only to assess current fitness but also to motivate continual improvement and readiness. It encompasses a range of physical challenges, each aimed at measuring key aspects of military fitness. From strength and endurance to speed and agility, the ACFT Scoring Scales give soldiers a detailed understanding of their performance in areas critical to their roles in the Army. By understanding these scales, soldiers can better target their training, focusing on areas that need improvement, and striving for excellence in all aspects of physical fitness.
            
          </p>
          <p className=' my-2  tracking-wide leading-8 underline hover:cursor-pointer font-medium' onClick={handleReadLess}>
            read less
          </p>
        </div>
      </div>
      :
      <div>
      <div className='my-7'>
        <h2 id='readmoreview' className='lg:text-4xl md:text-4xl sm:text-2xl text-xl'>
        ACFT Score Tool: Assess Your Army Combat Fitness Test Performance 
        </h2>
        <p className=' my-5 font-light  tracking-wide leading-8'>
          {firstSentence.slice(0,250)} ... 
        </p>
        <p className=' my-5  tracking-wide leading-8 underline hover:cursor-pointer font-medium' onClick={()=>{setReadMore(!readMore)}}>read more</p>
        </div>
      </div>}
     
      <div className=' flex flex-col   space-y-5 mt-10'>
        <h2 className=' lg:text-4xl md:text-4xl sm:text-2xl text-xl text-left'>
          Benefits of ACFT Calculator
        </h2>
        <p className=' font-light  tracking-wide leading-8'>
          The ACFT Calculator is an essential tool for accurately assessing physical fitness and tracking progress in the Army Combat Fitness Test. It offers personalized insights and guidance, aiding soldiers in achieving optimal physical readiness.
        </p>

        <div className=' flex flex-wrap justify-center xl:justify-around w-full'>
          {images.map((image,index)=>{
            return (
              <Card key={index}
              image={image} 
              heading={card_heading[index]}
              content={card_content[index]}
              />
            )
          })}
        </div>
      </div>
    </div>
    </div>
  )
}
