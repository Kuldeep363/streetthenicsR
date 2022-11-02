import React from 'react';
import { Link, useOutletContext } from 'react-router-dom';

function MuscleGainTips() {
    let [activeBtn] = useOutletContext();
    activeBtn('tips');
  return (
    <div id="tips" class="muscle-gain-page mt-5">

        <h1 class="heading-1" style={{fontWeight: '600',fontSize: '24px'}}>Hey you want to gain muscle!</h1>
        <h2 class="mt-3">
            When it comes to physique improvements, muscle building is often a top priority. <br/><br/>
            Added muscle mass will increase the definition of your muscles, improve your lean body mass, and add bulk and size to your frame in all the right places. <br/><br/>
            <strong>
                Muscle growth takes time, persistence, and a long-term commitment to the process.
            </strong> <br/><br/>
            While gaining large amounts of muscle may seem daunting, with proper training programs and adequate consumption of certain foods, serious muscle building is possible for most people. <br/><br/>
    
        </h2>


        <h1 class="heading-1 mt-3" style={{fontWeight: '600',fontSize: '24px'}}>What is muscle building?</h1>
        <h2 class="mt-3">
            Anatomically, skeletal muscles are a series of parallel cylindrical fibers that contract to produce force. This muscle contraction allows all external human movement to occur. <br/><br/>
            If your body removes more protein than it adds, you’ll lose muscle mass. If the net protein synthesis is even, no measurable change in muscle size occurs. Finally, if your body deposits more protein than it removes, your muscles will grow. <br/><br/>
            <strong>
                The key to building muscle is to increase the rate of protein deposition while minimizing the rate of protein breakdown.
            </strong> <br/><br/>
            To build new muscle tissue, your primary tools for increasing your body’s rate of protein synthesis are performing resistance training and getting sufficient amounts of protein and overall nutrients. <br/><br/>
            The correct amount of resistance training drives your body’s hormonal response toward building muscle, but it requires sufficient protein and energy availability to ensure the process results in muscle gains as opposed to muscle losses. <br/><br/>
            
        </h2>


        <h1 class="heading-1 mt-3" style={{fontWeight: '600',fontSize: '24px'}}>Some hacks of muscle building!</h1>
        <h2 class="mt-3">
            While many types of exercise offer health benefits, the only way to reliably drive muscle growth is by using your muscles against moderate to heavy resistance. In addition, muscle growth is specific to the muscles being used. <br/><br/>
            <p style={{color: 'var(--red)',fontSize: "20px"}}>Decide your target number of repetitions</p>
            The repetition continuum is a useful concept when designing training programs for muscle building. <br/><br/>
            Stimulating muscle growth requires performing weight training exercises with an amount of weight that only allows you to perform 1–20 repetitions. <br/><br/>
            <strong>1-5 Reps: </strong> develops more strength <br/><br/>
            <strong>6-12 Reps: </strong> develops more muscle growth <br/><br/>
            <strong>13-20: </strong> develops more muscular endurance <br/><br/>
            Understand that these ranges will have some crossover, meaning that 3-repetition sets with the respective weight will cause some muscle growth, 8-repetition sets will build some strength, and 20-repetition sets will build muscle as well. <br/><br/>
            <p style={{color: 'var(--red)',fontSize: "20px"}}>Choose the right amount of weight</p>
            In all cases, the weight must be heavy enough that performing much more than 20 reps is impossible. <br/><br/>
            The weight you choose to use should leave you at or near failure on your specified number of repetitions. <br/><br/>
            For example, if you’re performing a set of 10 repetitions, by the tenth repetition, you should be unable or nearly unable to perform another repetition. You should rarely have more than “two reps in the tank” by the end of a set if your goal is building muscle. <br/><br/>
            The overall implication of the repetition range continuum is that you should go through different phases of training using different repetition ranges to see what gives your body the most muscle growth. <br/><br/>
            <p style={{color: 'var(--red)',fontSize: "20px"}}>Choose your exercises well</p>
            As mentioned, muscle building is specific to the muscle being worked. <br/><br/>
            For example, to build bigger biceps, you need to perform exercises that work the biceps. This could be an isolated bicep exercise, such as a bicep curl, or a compound movement that uses the biceps, such as a pullup( <Link to="/">Choose muscle to train</Link> ). <br/><br/>
            In terms of the best exercise type for muscle building, compound and isolation movements can be equally effective at causing muscle <strong title=" Hypertrophy refers to an increase in muscular size achieved through exercise.">hypertrophy</strong> <br/><br/>
            Nevertheless, for the best long-term fitness results, you should include both compound and isolation movements in your training. <br/><br/>
            Compound movements like a barbell back squat effectively stimulate multiple large muscle groups in a single exercise and provide more functional movement for real-life activities. This leads to both more efficient workouts and more practical muscle strength. <br/><br/>
            Isolation movements are an excellent way to target specific muscles, and beginners may initially find them safer and easier to learn than compound movements. <br/><br/>
            <p style={{color: 'var(--red)',fontSize: "20px"}}>Structure your workout to avoid overtraining</p>
            A good rule of thumb is to perform 3 sets of 3–5 compound movements, followed by 3 sets of 1–2 isolation movements per workout. <br/><br/>
            Generally, you do your heaviest sets using compound movements and perform higher repetition ranges on your isolation movements. <br/><br/>
            Assuming you’re performing three working sets per exercise, limit your total combined compound and isolation movement exercises to 5–7 movements per workout. <br/><br/>
            <i>Gaining muscle is possible using all repetition ranges, and some people may respond better to lower or higher repetitions with heavier or lighter weights, respectively. Include compound and isolation movements in your program.</i>
        </h2>


        <h1 class="heading-1 mt-3" style={{fontWeight: '600',fontSize: '24px'}}>Eat to gain muscle!</h1>
        <h2 class="mt-3">
            Your diet is the second half of the muscle building equation. All the weight training in the world will not yield results if you don’t supply your body the nutrients it needs to grow new muscle tissue. <br/><br/>
            <p style={{color: 'var(--red)',fontSize: "20px"}}>Bulking v/s cutting</p>
            Most athletes, bodybuilders, and serious muscle growing enthusiasts follow some variation of a bulking and cutting cycle. <br/><br/>
            - Bulking periods refer to training phases during which you eat more food than you burn to support muscle growth. <br/><br/>
            - On the other hand, cutting refers to a period of restricting calories to reduce body fat, all while eating and training enough to avoid losing muscle. <br/><br/>
            The main goal of eating to gain muscle during a bulking phase is supplying your body with enough nutrients to grow, but not so many calories that you put on more fat than muscle. <br/><br/>
            While some minor fat gains tend to occur during periods of bulking, a sweet spot, where your body builds muscle but does not store large quantities of fat, tends to occur when you eat 300–500 surplus calories. <br/><br/>
            Your body has a maximum muscle building rate, and beyond that limit, excess calories will be stored as fat. If your goal is to have defined muscles, you want to avoid gaining too much body fat. <br/><br/>
            <p style={{color: 'var(--red)',fontSize: "20px"}}>Calories needed to gain muscle</p>
            For sustainable muscle gain without excess fat gain, you want to eat 300–500 calories per day above your baseline needs. <br/><br/>
            Many factors affect your baseline calorie needs, also known as your total daily energy expenditure( TDEE ). These factors include your age, sex, current lean body mass, physical activity, occupation, and underlying medical conditions. <br/><br/>
            Your best bet is to use an online calculator to estimate your calorie expenditure based on the data you input. Once you have this baseline expenditure, add 300 calories to establish your daily calorie goal. <br/><br/>
            <p style={{color: 'var(--red)',fontSize: "20px"}}>Protein needed to gain muscle</p>
            When it comes to nutrients for building muscle, protein is the top priority. Recent research suggests that those training to gain muscle should eat around 0.72 grams of protein per pound (1.6 grams per kg) of body weight per day. <br/><br/>
            When it comes to choosing what foods to eat, a registered dietician can advise you specifically. Nevertheless, eating a variety of protein sources is probably your best bet. <br/><br/>
            <p style={{color: 'var(--red)',fontSize: "20px"}}>Carbs and fat needed to gain muscle</p>
            In terms of your carb and fat intakes, the recommendations are more varied. You need dietary fat to ensure optimal hormone functioning, among other things. <br/><br/>
            Recent bodybuilding research suggests consuming 0.22–0.68 grams of fat per pound (0.5–1.5 grams per kg) of body weight per day. <br/><br/>
            If you tend to prefer fattier foods, start on the higher end of that range and adjust from there. The rest of your daily calories should come from various carb sources. <br/><br/>
            To calculate this, multiply your daily protein goal by 4 and your daily fat intake goal by 9, as protein has 4 calories per gram and fat has 9 calories per gram. This will establish how many calories you’ll be consuming from protein and fat. <br/><br/>
            Next, subtract this number from your calculated daily energy need, and divide it by 4 (the number of calories in a gram of carbohydrate) to get the grams of carbs you need to eat to hit but not exceed your daily calorie intake. <br/><br/>
            
            <Link to=""> Calculate Protein need</Link>
            <Link to=""> Calculate Fat need</Link>
            <Link to=""> Calculate Carbs need</Link>
            <br/><br/>
            In the long run, getting a consistent protein intake and ensuring you don’t exceed 500 surplus calories per day are the keys to gaining muscle without putting on too much excess fat. <br/><br/>






        </h2>

        <h1 class="heading-1 mt-3" style={{fontWeight: '600',fontSize: '24px'}}>How fast can you gain muscle?</h1>
        <h2 class="mt-3">
            While gaining muscle is surprisingly simple compared with many other life goals, that doesn’t mean it’s easy — and it certainly doesn’t happen quickly. <br/><br/>
            Gaining serious muscle takes many months and years of weight training and proper eating. Muscle gain rates vary by individual, even when following the same program. <br/><br/>
            Overall, with good nutrition and consistent training, research has found that 0.5–2 pounds (0.25–0.9 kg) of muscle growth per month is a good benchmark for maximal potential muscle growth. <br/><br/>
            While this may seem like a small amount, over time, the results can be dramatic. With just a few years of consistent training, you can gain 20–40 pounds (9–18 kg) of muscle, which would be a dramatic physique change for virtually anyone beginning a resistance training program. <br/><br/>
            <strong>Gaining muscle requires a commitment to both resistance training and following an appropriate diet</strong>
        </h2>
        <a href="https://www.healthline.com/health/fitness/how-to-gain-muscle" target="_blank" rel="noreferrer">From Healthline.com</a>

    </div>
  )
}

export default MuscleGainTips