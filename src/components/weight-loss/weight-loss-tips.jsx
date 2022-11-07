import React from 'react';
import { useOutletContext } from 'react-router-dom';

function WeightLossTips() {
    let [activeBtn] = useOutletContext();
    activeBtn('tips');
    document.title = 'Weight loss Tips -Street Thenics| Best weight loss routine | weight loss in 30 days'
  return (
    <div id="tips" className=" weight-loss-page mt-5">
        <h1 className="heading-1" style={{fontWeight: '600',fontSize: '24px'}}>Hey you want to lose weight!</h1>
        <h2 className="mt-3">
            If your doctor recommends it, there are ways to lose weight safely. A steady weight loss of 1 to 2 pounds per week is recommended for the most effective long-term weight management. <br/><br/>
            That said, many eating plans leave you feeling hungry or unsatisfied. These are major reasons why you might find it hard to stick to a healthier eating plan. <br/><br/>
            However, not all diets have this effect. Low carb diets and whole food, lower calorie diets are effective for weight loss and may be easier to stick to than other diets. <br/><br/>
            Here are some ways to lose weight that employ healthy eating, potentially lower carbs, and that aim to: <br/><br/>
    
            - reduce your appetite <br/>
            - cause fast weight loss <br/>
            - improve your metabolic health at the same time <br/><br/>
    
            <strong>
                Weight loss or weight gain, it's all depends on calories you intake. For weight loss you have to do calorie deficit. <br/>
                Calorie deficit means you have to intake less calories than your maintainace calories ( Maintenance calories are precisely the number of calories your body needs to support energy expenditure )
            </strong>
    
        </h2>
    
        <h1 className="mt-3 heading-1" style={{fontWeight: '600',fontSize: '24px'}}>Weight loss tips</h1>
    
        <h1 className="mt-3" style={{color: 'var(--red)',fontWeight: '500'}}>1. Cut back on refined carbs</h1>
        <h2 className="mt-2">
            One way to lose weight quickly is to cut back on sugars and starches, or carbohydrates. This could be with a low carb eating plan or by reducing refined carbs and replacing them with whole grains.
            <br/><br/>
            When you do that, your hunger levels go down, and you generally end up eating fewer calories .
            <br/><br/>
            With a low carb eating plan, you’ll utilize burning stored fat for energy instead of carbs.
            <br/><br/>
            If you choose to eat more complex carbs like whole grains along with a calorie deficit, you’ll benefit from higher fiber and digest them more slowly. This makes them more filling to keep you satisfied.
            <br/><br/>
            A 2020 study confirmed that a very low carbohydrate diet was beneficial for losing weight in older populations .
            <br/><br/>
            Research also suggests that a low carb diet can reduce appetite, which may lead to eating fewer calories without thinking about it or feeling hungry.
            <br/><br/>
            Note that the long-term effects of a low carb diet are still being researched. It can also be difficult to adhere to a low carb diet, which may lead to yo-yo dieting and less success in maintaining a healthy weight.
        </h2>

        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1593072793245373"
            crossorigin="anonymous"></script>
        <ins className="adsbygoogle"
            style="display:block; text-align:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-1593072793245373"
            data-ad-slot="1248221347"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script> */}
    
        <h1 className="mt-3" style={{color: 'var(--red)',fontWeight: '500'}}>2. Eat protein, fat, and vegetables</h1>
        <h2 className="mt-2">
            Each one of your meals should include: <br/>
    
            - a protein source <br/>
            - fat source <br/>
            - vegetables <br/>
            - a small portion of complex carbohydrates, such as whole grains <br/><br/>
    
            <p style={{color: 'var(--red)',fontSize: '20px'}}>Protien</p>
            Eating a recommended amount of <a target="_blank" rel="noreferrer" href="https://www.amazon.in/gp/search?ie=UTF8&tag=streetthenics-21&linkCode=ur2&linkId=97515befecb49276527db7d0833eafeb&camp=3638&creative=24630&index=aps&keywords=protein, supplements, whey protein, best protein">Protein</a> is essential to help preserve your health and muscle mass while losing weight .
            <br/> <br/>
            Evidence suggests that eating adequate protein may improve cardiometabolic risk factors, appetite, and body weight.
            <br/><br/>
            Here’s how to determine how much you need to eat without eating too much. Many factors determine your specific needs, but generally, an average person needs:
            <br/><br/>
            - 56–91 grams per day for the average male <br/>
            - 46–75 grams per day for the average female <br/>
            for weight loss <br/> <br/>
    
            Diets with adequate protein can also help: <br/>
    
            - reduce cravings and obsessive thoughts about food by 60% <br/>
            - reduce the desire to snack late at night by half <br/>
            - make you feel full <br/>
            In one study, people on a higher protein diet ate 441 fewer calories per day <br/><br/>
    
            Healthy protein sources include: <br/> <br/>
            - Meat: <a target="_blank" rel="noreferrer" href="https://www.amazon.in/gp/search?ie=UTF8&tag=streetthenics-21&linkCode=ur2&linkId=d5ade91660cb69a198b2265bc2c4d87c&camp=3638&creative=24630&index=aps&keywords=beef">beef</a>, <a target="_blank" rel="noreferrer" href="https://www.amazon.in/gp/search?ie=UTF8&tag=streetthenics-21&linkCode=ur2&linkId=ed87bab2ea3a180488d276b4a9c45f7c&camp=3638&creative=24630&index=aps&keywords=chicken, best fresh chicken">chicken</a>, <a target="_blank" rel="noreferrer" href="https://www.amazon.in/gp/search?ie=UTF8&tag=streetthenics-21&linkCode=ur2&linkId=e26d45aae9508c4fe13965df466a6df4&camp=3638&creative=24630&index=aps&keywords=pork, best fresh pork">pork</a>, and lamb <br/>
            <br/>
            - Fish and seafood: <a target="_blank" rel="noreferrer" href="https://www.amazon.in/gp/search?ie=UTF8&tag=streetthenics-21&linkCode=ur2&linkId=1ed19fe97042658788e9e43dc466478e&camp=3638&creative=24630&index=aps&keywords=salmon fish">salmon</a>, trout, and <a target="_blank" rel="noreferrer" href="https://www.amazon.in/gp/search?ie=UTF8&tag=streetthenics-21&linkCode=ur2&linkId=9f0407bae85ce4bc4cf3df3c39af79aa&camp=3638&creative=24630&index=aps&keywords=shrimp fish">shrimp</a> <br/>
            <br/>
            - Eggs: <a target="_blank" rel="noreferrer" href="https://www.amazon.in/gp/search?ie=UTF8&tag=streetthenics-21&linkCode=ur2&linkId=18149b2dd954b8cc5a744e8cf3c8b639&camp=3638&creative=24630&index=aps&keywords=eggs, best fresh eggs">whole eggs with the yolk</a> <br/>
            <br/>
            - Plant-based proteins: beans, <a target="_blank" rel="noreferrer" href="https://www.amazon.in/gp/search?ie=UTF8&tag=streetthenics-21&linkCode=ur2&linkId=34e89dc4f56d70daf20c36f97f589d23&camp=3638&creative=24630&index=aps&keywords=legumes, best fresh legumes">legumes</a>, <a target="_blank" rel="noreferrer" href="https://www.amazon.in/gp/search?ie=UTF8&tag=streetthenics-21&linkCode=ur2&linkId=936ae2efd109974052fe41d498e629bd&camp=3638&creative=24630&index=aps&keywords=quinoa, best fresh quinoa">quinoa</a>, <a target="_blank" rel="noreferrer" href="https://www.amazon.in/gp/search?ie=UTF8&tag=streetthenics-21&linkCode=ur2&linkId=31734fca8d988a7f19d82440b9a5fdf0&camp=3638&creative=24630&index=aps&keywords=tempeh, best fresh tempeh">tempeh</a>, and <a target="_blank" rel="noreferrer" href="https://www.amazon.in/gp/search?ie=UTF8&tag=streetthenics-21&linkCode=ur2&linkId=770e65cce50e67f89a73c32f1856186b&camp=3638&creative=24630&index=aps&keywords=tofu, best fresh tofu">tofu</a> <br/>
            <br/><br/>
    
            <p style={{color: 'var(--red)',fontSize: '20px'}}>Low carb and leafy green vegetables</p>
            Don’t be afraid to load your plate with leafy green vegetables. They’re packed with nutrients, and you can eat very large amounts without greatly increasing calories and carbs.
            <br/> <br/> <strong>Vegetables to include for low carb or low calorie eating plans:</strong> <br/> <br/>
            - <a target="_blank" rel="noreferrer" href="https://www.amazon.in/gp/search?ie=UTF8&tag=streetthenics-21&linkCode=ur2&linkId=af5c0a244c2df857216106fd1c84f14e&camp=3638&creative=24630&index=aps&keywords=broccoli, best fresh broccoli">broccoli</a> <br/> <br/>
            - cauliflower <br/> <br/>
            - <a target="_blank" rel="noreferrer" href="https://www.amazon.in/gp/search?ie=UTF8&tag=streetthenics-21&linkCode=ur2&linkId=b988ab35fd5a750f4d8827ba887037fd&camp=3638&creative=24630&index=aps&keywords=spinach, best spinach products">spinach</a> <br/> <br/>
            - tomatoes <br/> <br/>
            - kale <br/> <br/>
            - Brussels sprouts <br/> <br/>
            - cabbage <br/> <br/>
            - Swiss chard <br/> <br/>
            - lettuce <br/> <br/>
            - cucumber <br/> <br/>

            <br/>
            <p style={{color: 'var(--red)',fontSize: '20px'}}>Healthy fats</p>
            <br/>

            Don’t be afraid of eating fats. <br/><br/>

            Your body still requires healthy fats no matter what eating plan you choose. <a target="_blank" rel="noreferrer" href="https://www.amazon.in/gp/search?ie=UTF8&tag=streetthenics-21&linkCode=ur2&linkId=a2440a3a5e3c9dae787de70ca155e1d8&camp=3638&creative=24630&index=aps&keywords=Olive oil , best Olive oil ">Olive oil </a> and <a target="_blank" rel="noreferrer" href="https://www.amazon.in/gp/search?ie=UTF8&tag=streetthenics-21&linkCode=ur2&linkId=d74c30c5eb7501b8938d5c73d789065b&camp=3638&creative=24630&index=aps&keywords=edible avocado oil , cooking avocado oil ">avocado oil</a> are great choices for including in your eating plan.
            <br/>
            Other fats such as butter and coconut oil should be used only in moderation due to their higher saturated fat content

        </h2>

        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1593072793245373"
            crossorigin="anonymous"></script>
        <ins className="adsbygoogle"
            style="display:block; text-align:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-1593072793245373"
            data-ad-slot="1248221347"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script> */}


        <h1 className="mt-3" style={{color: 'var(--red)',fontWeight: '500'}}>3. Move your body</h1>
        <h2 className="mt-2">
            Exercise, while not required to lose weight, can help you lose weight more quickly. Lifting weights has particularly good benefits. <br/><br/>
            By lifting weights, you’ll burn lots of calories and prevent your metabolism from slowing down, which is a common side effect of losing weight <br/> <br/>
            Try going to the gym three to four times a week to lift weights. If you’re new to the gym, ask a trainer for some advice. Make sure your doctor is also aware of any new exercise plans. <br/><br/>
            If lifting weights is not an option for you, doing some cardio workouts such as walking, jogging, running, cycling, or swimming is very beneficial for weight loss and general health. <br/><br/>
            <strong>Both cardio and weightlifting can help with weight loss.</strong>
        </h2>

        {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1593072793245373"
     crossorigin="anonymous"></script>
        <ins className="adsbygoogle"
            style="display:block; text-align:center;"
            data-ad-layout="in-article"
            data-ad-format="fluid"
            data-ad-client="ca-pub-1593072793245373"
            data-ad-slot="1248221347"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script> */}

        <h1 className="mt-3 heading-1" style={{fontWeight: '600',fontSize: '24px'}}> Super Weight loss tips</h1>
        <div className="mt-5">
            <h2 className="mt-2">
                <strong>- Eat a high protein breakfast :</strong>Eating a <a target="_blank" rel="noreferrer" href="https://www.amazon.in/gp/search?ie=UTF8&tag=streetthenics-21&linkCode=ur2&linkId=6fa7a06f4f947f1f61f0900e433a63c7&camp=3638&creative=24630&index=aps&keywords= high protein breakfast"> high protein breakfast</a> could help reduce cravings and calorie intake throughout the day.
            </h2> <br/>
            <h2 className="mt-2">
                <strong>- Avoid sugary drinks and fruit juice :</strong>Empty calories from sugar aren’t useful to your body and can hinder weight loss.
            </h2> <br/>
            <h2 className="mt-2">
                <strong>- Drink water before meals :</strong>One study showed that drinking water before meals reduced calorie intake and may be effective in weight management.
            </h2> <br/>
            <h2 className="mt-2">
                <strong>- Choose weight-loss-friendly foods :</strong>Some foods are better for weight loss than others. Here is a list of healthy weight-loss-friendly foods.
            </h2> <br/>
            <h2 className="mt-2">
                <strong>- Eat soluble fiber :</strong>Studies show that soluble fibers may promote weight loss. Fiber supplements like glucomannan can also help.
            </h2> <br/>
            <h2 className="mt-2">
                <strong>- Drink coffee or tea :</strong>Caffeine consumption can boost your metabolism .
            </h2> <br/>
            <h2 className="mt-2">
                <strong>- Base your diet on whole foods :</strong>They’re healthier, more filling, and much less likely to cause overeating than processed foods.
            </h2> <br/>
            <h2 className="mt-2">
                <strong>- Eat slowly :</strong>Eating quickly can lead to weight gain over time, while eating slowly makes you feel more full and boosts weight-reducing hormones.
            </h2> <br/>
            <h2 className="mt-2">
                <strong>- Get good quality sleep :</strong>Sleep is important for many reasons, and poor sleep is one of the biggest risk factors for weight gain.
            </h2> 
        </div>
    
    <a href="https://www.healthline.com/nutrition/how-to-lose-weight-as-fast-as-possible" target="_blank" rel="noreferrer">From healthline.com</a>
    
    
    
    </div>
  )
}

export default WeightLossTips
