import React from 'react';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

function MuscleGainDiet() {
  let [activeBtn] = useOutletContext();
  useEffect(()=>{
      activeBtn('diet');
      document.title = 'Muscle Gain Diet -Street Thenics| Best Muscle Gain Diet | Fast Growth Of Muscle';
  },[])
  return (
    <div id="diet" className="muscle-gain-page mt-5">

        
        <h1 className="heading-1" style={{fontWeight: '600',fontSize: '24px'}}>Let's eat healthy to gain muscle!</h1>
        <h2 className="mt-3">
            There are two ways of muscle gain, in first is to increase muscle mass in the bulking phase and reduce body fat in the cutting phase. Hence, you consume more calories in the bulking phase than in the cutting phase. <br/><br/>
            The easiest way to determine how many calories you need is to weigh yourself at least three times a week and record what you eat using a calorie tracking app. <br/><br/>
            If your weight stays the same, the daily number of calories you eat is your maintenance calories — in other words, you’re not losing or gaining weight, but maintaining it. <br/><br/>
            During your bulking phase, it’s recommended to increase your calorie intake by 15%. For example, if your maintenance calories are 3,000 per day, you should eat 3,450 calories per day (3,000 x 0.15 = 450) during your bulking phase. <br/><br/>
            When transitioning from a bulking to a cutting phase, you would instead decrease your maintenance calories by 15%, meaning you would eat 2,550 calories per day instead of 3,450. <br/><br/>
            As you gain weight in the bulking phase or lose weight in the cutting phase, you will need to adjust your calorie intake at least monthly to account for changes in your weight.Increase your calories as you gain weight in the bulking phase and decrease your calories as you lose weight in the cutting phase for continued progression. <br/><br/>
            During either phase, it’s recommended not to lose or gain more than 0.5–1% of your body weight per week. This ensures that you don’t lose too much muscle during the cutting phase or gain too much body fat during the bulking phase.
        </h2>


        <h1 className="heading-1" style={{fontWeight: '600',fontSize: '24px'}}>Macronutrient Ratio</h1>
        <h2 className="mt-3">
            Once you establish the number of calories you need, you can determine your macronutrient ratio, which is the ratio between your protein, carbohydrate and fat intake.Unlike the difference in your calorie needs between the bulking and cutting phase, your macronutrient ratio does not change. <br/><br/>
            <strong>Protein and carbs contain 4 calories per gram, and fat contains 9.</strong> <br/><br/>
            It’s recommended that you get: <br/><br/>
            - 30–35% of your calories from protein <br/><br/>
            - 55–60% of your calories from carbs <br/><br/>
            - 15–20% of your calories from fat <br/><br/>
            Here’s an example of the ratio for both a bulking and cutting phase( assuming your maintainance calories is 3000): <br/><br/>
            <table className="table table-hover">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Bulking</th>
                    <th scope="col">Cutting</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Calories</th>
                    <td>3,450</td>
                    <td>2,550</td>
                  </tr>
                  <tr>
                    <th scope="row">Protein(grams)</th>
                    <td>259–302</td>
                    <td>191–223</td>
                  </tr>
                  <tr>
                    <th scope="row">Carbs(grams)</th>
                    <td >474–518</td>
                    <td>351–383</td>
                  </tr>
                  <tr>
                    <th scope="row">Fat(grams)</th>
                    <td >58–77</td>
                    <td>43–57</td>
                  </tr>
                </tbody>
              </table> <br/>
              <i>These are general guidelines, so its best to consult with a registered dietitian to determine your individual needs based on your goals to make sure your diet is nutritionally adequate.</i> <br/><br/>
              <strong>Recommended calorie intake, but not your macronutrient ratio, differ between the bulking and cutting phase. To account for weight changes, adjust your calorie intake each month.</strong>
        </h2>


        <h1 className="heading-1" style={{fontWeight: '600',fontSize: '24px'}}>Foods to Eat and Avoid</h1>
        <h2 className="mt-3">
            Like training, diet is a vital part of muscle gain. <br/><br/>
            Eating the right foods in the appropriate amounts provides your muscles with the nutrients they need to recover from workouts and grow bigger and stronger. <br/><br/>
            Conversely, consuming the wrong foods or not consuming enough of the right ones will leave you with subpar results. <br/><br/>
            <p style={{color: 'var(--red)',fontSize: "20px"}}>Foods to Focus On</p> <br/>
            The foods you eat don’t need to differ between the bulking and cutting phase — usually, it’s the amounts that do. <br/><br/>
            - <strong>Meats, poultry and fish: </strong>Sirloin steak, ground beef, pork tenderloin, venison, chicken breast, salmon, tilapia and cod. <br/><br/>
            - <strong>Dairy: </strong>Yogurt, cottage cheese, low-fat milk and cheese. <br/><br/>
            - <strong>Grains: </strong>Bread, cereal, crackers, oatmeal, quinoa, popcorn and rice. <br/><br/>
            - <strong>Fruits: </strong>Oranges, apples, bananas, grapes, pears, peaches, watermelon and berries. <br/><br/>
            - <strong>Starchy vegetables: </strong>Potatoes, corn, green peas, green lima beans and cassava. <br/><br/>
            - <strong>Vegetables: </strong> Broccoli, spinach, leafy salad greens, tomatoes, green beans, cucumber, zucchini, asparagus, peppers and mushrooms. <br/><br/>
            - <strong>Seeds and nuts: </strong>Almonds, walnuts, sunflower seeds, chia seeds and flax seeds. <br/><br/>
            - <strong>Beans and legumes: </strong>Chickpeas, lentils, kidney beans, black beans and pinto beans. <br/><br/>
            - <strong>Oils: </strong>Olive oil, flaxseed oil and avocado oil. <br/><br/>

            <p style={{color: 'var(--red)',fontSize: "20px"}}>Foods to Limit</p> <br/>
            While you should include a variety of foods in your diet, there are some you should limit. <br/><br/>
            - <strong>Alcohol: </strong>Alcohol can negatively affect your ability to build muscle and lose fat, especially if you consume it in excess. <br/><br/>
            - <strong>Added sugars: </strong>These offer plenty of calories but few nutrients. Foods high in added sugars include candy, cookies, doughnuts, ice cream, cake and sugar-sweetened beverages, such as soda and sports drinks. <br/><br/>
            - <strong>Deep-fried foods: </strong>These may promote inflammation and — when consumed in excess — disease. Examples include fried fish, french fries, onion rings, chicken strips and cheese curds. <br/><br/>

            <strong>In addition to limiting these, you may also want to avoid certain foods before going to the gym that can slow digestion and cause stomach upset during your workout: </strong> <br/><br/>
            - <strong>High-fat foods: </strong>High-fat meats, buttery foods and heavy sauces or creams. <br/><br/>
            - <strong>High-fiber foods: </strong>Beans and cruciferous vegetables like broccoli or cauliflower. <br/><br/>
            - <strong>Carbonated beverages: </strong>Sparkling water or diet soda. <br/><br/>


            <p style={{color: 'var(--red)',fontSize: "20px"}}>Muscle gain supplements</p> <br/>
            Many bodybuilders take dietary supplements, some of which are useful while others are not. <br/><br/>
            The best supplements include: <br/><br/>
            - <strong>Whey protein: </strong>Consuming <a href="https://amzn.to/3j6E7Pr" target="_blank" rel="noreferrer" >whey protein</a> powder is an easy and convenient way to increase your protein intake. <br/><br/>
            - <strong>Creatine: </strong> <a href="https://amzn.to/3sCwinw" target="_blank" rel="noreferrer" >Creatine</a> provides your muscles with the energy needed to perform an additional rep or two. While there are many brands of creatine, look for creatine monohydrate as it’s the most effective. <br/><br/>
            - <strong>Caffeine: </strong><a href="https://amzn.to/3B2tseQ" target="_blank" rel="noreferrer" >Caffeine</a> decreases fatigue and allows you to work harder. It’s found in pre-workout supplements, coffee or tea. <br/><br/>
            <i>A multi-vitamin and mineral supplement may be helpful if you’re limiting your calorie intake in an effort to reduce body fat during your cutting phase.</i>

        </h2>


        <h1 className="heading-1 mt-5">1 week muscle gain meal plan</h1>
        <h2 className="mt-3">
            <div className="accordion" id="accordionExample" >
                <div className="mt-3 day">
                <div className="card-heading" id="headingOne1">
                    <h2 className="mb-0">
                    <button className="btn  btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne1" aria-expanded="true" aria-controls="collapseOne1">
                        Day 1
                    </button>
                    </h2>
                </div>
            
                <div id="collapseOne1" className="collapse show" aria-labelledby="headingOne1" data-parent="#accordionExample">
                    <div className="card-text">
                        <div className="diet">
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 3 scrambled eggs, 3 rashers of grilled lean smoked bacon, a large handful of spinach and 1 slice of lightly buttered wholemeal toast. <br/>
                                    - ½ a grapefruit.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 
                                    {/* <a href="#">
                                        </a> */}
                                        Muscle gainig Shake
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Tuna mayonnaise sandwich( Mix one 150g can of tuna with 2tbsp of low-fat mayonnaise and serve on two slices of wholemeal bread ). <br/>
                                    - 3 salt and vinegar rice cakes. <br/>
                                    - 1 orange.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 25g brazil nuts.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Paprika grilled chicken and vegetables <br/>
                                    <b>Process: </b> Chop some pepper and onion and place them in a bowl. Add 1tbsp rapeseed oil, 1tsp paprika, salt and pepper, and mix together. Pour the mixture over 300g sliced chicken breast on a baking tray. Meanwhile, lightly steam some broccoli then set aside. Grill the chicken and veg for 5-7 minutes then add the broccoli and grill for a further 5-7 minutes. Serve with 200g lightly buttered new potatoes.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 30g whey protein powder mixed with 100g low-fat Greek yogurt and 1 small sliced frozen banana.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="mt-3 day">
                <div className="card-heading" id="headingTwo2">
                    <h2 className="mb-0">
                    <button className="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo2" aria-expanded="false" aria-controls="collapseTwo2">
                        Day 2
                    </button>
                    </h2>
                </div>
                <div id="collapseTwo2" className="collapse" aria-labelledby="headingTwo2" data-parent="#accordionExample">
                    <div className="card-text">
                        <div className="diet">
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Mushroom, cheese and onion omelette made with 4 eggs and sautéed mushrooms, onion and 30g cheddar cheese. <br/>
                                    - 1 slice of lightly buttered wholemeal toast.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 1 apple and 30g peanut butter.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - BLT sandwich <br/>
                                    <b>Process: </b> Grill 3 rashers of lean smoked bacon and place them between 2 slices of wholemeal bread with sliced tomato, lettuce and low-fat mayonnaise. <br/>
                                    - 1 orange.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 50g beef jerky.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Grilled salmon and vegetables <br/>
                                    <b>Process: </b> Slice some pepper and courgette and halve some cherry tomatoes and place them in a bowl. Add 1tbsp of rapeseed oil, a splash of soy sauce, ½tsp of ground ginger and salt and pepper. Mix together then spread over a salmon fillet on a baking tray. Grill for 10-12 minutes and serve with 75g brown rice. <br/>
                                    <b>Quick tip Cook an extra portion of salmon at dinner for lunch the next day</b>
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 
                                    {/* <a href="#">
                                        </a> */}
                                        Muscle gainig Shake
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="mt-3 day">
                <div className="card-heading" id="headingThree3">
                    <h2 className="mb-0">
                    <button className="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree3" aria-expanded="false" aria-controls="collapseThree3">
                        Day 3
                    </button>
                    </h2>
                </div>
                <div id="collapseThree3" className="collapse" aria-labelledby="headingThree3" data-parent="#accordionExample">
                    <div className="card-text">
                        <div className="diet">
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Ham and cheese omelette made with 4 eggs, 50g ham and 20g cheddar cheese, served with a large handful of spinach, a handful of tomatoes and 1 slice of lightly buttered wholemeal toast.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 
                                    {/* <a href="#">
                                        </a> */}
                                        Muscle gainig Shake
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Salmon and avocado salad <br/>
                                    <b>Process: </b> Mix together 1 flaked salmon fillet,½ a sliced avocado, cherry tomatoes, salad leaves, 10g pine nuts, 10g rapeseed oil, a generous squeeze of lemon and salt and pepper.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 25g almonds.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Honey and mustard chicken <br/>
                                    <b>Process: </b> Cut 250g of chicken into slices and add it to a bowl with 1tbsp honey and 1tsp mustard. Season with salt and pepper and mix. In another bowl, chop some courgette, pepper and onion, add 1tbsp rapeseed oil, salt and pepper, mix and spread it over a baking tray. Add the chicken to the tray and grill for 5-7 minutes before turning the chicken. Cook for a further 5 minutes and serve with 75g brown rice. <br/>
                                    <b> Quick tip Cook an extra portion of chicken at dinner for lunch the next day</b>
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 30g whey protein powder mixed with 150g low-fat Greek yogurt and 1 handful of frozen grapes.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="mt-3 day">
                <div className="card-heading" id="headingFour4">
                    <h2 className="mb-0">
                    <button className="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour4" aria-expanded="false" aria-controls="collapseFour4">
                        Day 4
                    </button>
                    </h2>
                </div>
                <div id="collapseFour4" className="collapse" aria-labelledby="headingFour4" data-parent="#accordionExample">
                    <div className="card-text">
                        <div className="diet">
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 3 scrambled eggs <br/>
                                    - 70g smoked salmon with a handful of cherry tomatoes, a large handful of spinach and sliced red pepper. <br/>
                                    - 25g brazil nuts.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 
                                    {/* <a href="#">
                                        </a> */}
                                        Muscle gainig Shake
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Chicken (approx 200g) <br/>
                                    - Avocado and tomato sandwich on wholemeal bread. <br/>
                                    - 3 salt and vinegar rice cakes.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snakc</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 50g beef jerky.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Mighty turkey burgers. <br/>
                                    {/* <a
                                     href="#">
                                        </a> */}
                                        See Recipe
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snakc</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 30g whey protein powder mixed with 100g low-fat Greek yogurt and 1 small sliced frozen banana.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="mt-3 day">
                <div className="card-heading" id="headingFive5">
                    <h2 className="mb-0">
                    <button className="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive5" aria-expanded="false" aria-controls="collapseFive5">
                        Day 5
                    </button>
                    </h2>
                </div>
                <div id="collapseFive5" className="collapse" aria-labelledby="headingFive5" data-parent="#accordionExample">
                    <div className="card-text">
                        <div className="diet">
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 3 soft-boiled eggs <br/>
                                    - 1 slice of lightly buttered wholemeal toast <br/>
                                    - A small handful of nuts.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 1 apple and 30g peanut butter.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Tuna Niçoise salad <br/>
                                    {/* <a
                                     href="#">
                                        </a> */}
                                        See recipe
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    -25g cashew nuts. <br/>
                                    - 50g dark chocolate
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Grilled salmon and vegetables <br/>
                                    <b>Process: </b> Slice some pepper and courgette and halve some cherry tomatoes and place them in a bowl. Add 1tbsp of rapeseed oil, a splash of soy sauce, ½tsp of ground ginger and salt and pepper. Mix together then spread over a salmon fillet on a baking tray. Grill for 10-12 minutes and serve with 75g brown rice. <br/>
                                    <b>Quick tip Cook an extra portion of salmon at dinner for lunch the next day</b>
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 
                                    {/* <a href="#">
                                        </a> */}
                                        Muscle gainig Shake
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="mt-3 day">
                <div className="card-heading" id="headingSix6">
                    <h2 className="mb-0">
                    <button className="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSix6" aria-expanded="false" aria-controls="collapseSix6">
                        Day 6
                    </button>
                    </h2>
                </div>
                <div id="collapseSix6" className="collapse" aria-labelledby="headingSix6" data-parent="#accordionExample">
                    <div className="card-text">
                        <div className="diet">
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 4 scrambled eggs <br/>
                                    - ½ an avocado mashed on 1 slice of wholemeal toast and a handful of cherry tomatoes.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Immunity-boosting smoothie <br/>
                                    <b>Process: </b> Blend 1 apple, 100g frozen berries, 1 large handful of spinach, 1 carrot, 10g clear honey, ½tsp of ginger and 100ml water.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Tuna melt <br/>
                                    <b>Process: </b> Toast 2 slices of wholemeal bread and grill 40g of cheese on one of the slices. Mix together 1 can of tuna, chopped spring onion and 2tbsp low-fat mayo, spread over the other slice, then put them together.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 1 small bag of salted popcorn.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - One-pot pork stew <br/>
                                    <b>Process: </b> Fry some onions for a few minutes then add 250g of diced pork chops. Brown the meat, then add ½tsp of paprika and some mushrooms. Cook for a few more mins then add a big squeeze of tomato purée and 200ml veg stock. Simmer for 20 minutes, mix in 50g Greek yogurt and serve with 100g potatoes and broccoli.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 
                                    {/* <a href="#">
                                        </a> */}
                                        Muscle gainig Shake
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="mt-3 day">
                <div className="card-heading" id="headingSeven7">
                    <h2 className="mb-0">
                    <button className="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven7" aria-expanded="false" aria-controls="collapseSeven7">
                        Day 7
                    </button>
                    </h2>
                </div>
                <div id="collapseSeven7" className="collapse" aria-labelledby="headingSeven7" data-parent="#accordionExample">
                    <div className="card-text">
                        <div className="diet">
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 3 scrambled eggs, 3 rashers of grilled lean smoked bacon, a large handful of spinach and 1 slice of lightly buttered wholemeal toast. <br/>
                                    - ½ a grapefruit.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 1 apple and 30g peanut butter.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Roast beef (approximately 250g), 200g roast potatoes, carrots, green beans, broccoli and gravy.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 20g cheddar cheese and a handful of grapes.
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Roast beef sandwich <br/>
                                    <b>Process: </b> 150g leftover beef from lunch, sliced red onion, rocket leaves, mustard and low-fat mayonnaise on slices of wholemeal bread
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 
                                    {/* <a href="#">
                                        </a> */}
                                        Muscle gainig Shake
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div><br/>

            <a href="https://www.coachmag.co.uk/nutrition/4042/try-this-7-day-muscle-building-diet-plan-it-s-super-cheap" target="_blank" rel="noreferrer" >From coachmag.co.uk</a>
        </h2>



        <h1 className="heading-1 mt-5">Super muscle gain meal plan</h1>
        <h2 className="mt-3">
            <div className="accordion" id="accordionExample" >
                <div className="mt-3 day">
                <div className="card-heading" id="headingOne">
                    <h2 className="mb-0">
                    <button className="btn  btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Day 1
                    </button>
                    </h2>
                </div>
            
                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div className="card-text">
                        <div className="diet">
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Oatmeal (with milk or water) <br/>
                                    - Handful of Dried Fruit and Assorted Nuts
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Boiled Eggs(4-6)
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Chicken or Turkey <br/>
                                    - Medium-sized Baked Potatoes(2-3) <br/>
                                    - Brown Rice(1-2 bowl)
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Salmon Fillet with Sweet Chilli Sauce <br/>
                                    - Brown Pasta <br/>
                                    - Spinach
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 
                                    {/* <a href="#">
                                        </a> */}
                                        Muscle gainig Shake
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="mt-3 day">
                <div className="card-heading" id="headingTwo">
                    <h2 className="mb-0">
                    <button className="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Day 2
                    </button>
                    </h2>
                </div>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-text">
                        <div className="diet">
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Scrambled Egg(4-6) <br/>
                                    - Avocado <br/>
                                    - Whole Grain Toast with peanut butter(2-4)
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Peanut butter(1-2 Tbsp) <br/>
                                    - Apple(1 medium size)
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Tuna <br/>
                                    - Brown Pasta <br/>
                                    - Green Salad
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Chicken Stir Fry, Soy Sauce, Peppers, Onion & Broccoli
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 
                                    {/* <a href="#">
                                        </a> */}
                                        Muscle gainig Shake
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="mt-3 day">
                <div className="card-heading" id="headingThree">
                    <h2 className="mb-0">
                    <button className="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Day 3
                    </button>
                    </h2>
                </div>
                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                    <div className="card-text">
                        <div className="diet">
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Chicken / Turkey Sausage <br/>
                                    - Egg <br/>
                                    - Whole Grain Toast with peanut butter
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Greek Yogurt <br/>
                                    - Granola
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Whole grain Wrap with lettuce <br/>
                                    - Chicken / Turkey <br/>
                                    - Black Beans
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Pork Tenderloin <br/>
                                    - Sweet Potato <br/>
                                    - Corn
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 
                                    {/* <a href="#">
                                        </a> */}
                                        Muscle gainig Shake
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="mt-3 day">
                <div className="card-heading" id="headingFour">
                    <h2 className="mb-0">
                    <button className="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Day 4
                    </button>
                    </h2>
                </div>
                <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                    <div className="card-text">
                        <div className="diet">
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Oatmeal (with milk or water) <br/>
                                    - Handful of Dried Fruit and Assorted Nuts
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Whole Grain Toast with Peanut Butter <br/>
                                    - Orange
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Chicken in tomato gravy <br/>
                                    - Brown Rice
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Beef Sirloin <br/>
                                    - Boiled sweet Potato Side Salad
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snakc</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 
                                    {/* <a href="#">
                                        </a> */}
                                        Muscle gainig Shake
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="mt-3 day">
                <div className="card-heading" id="headingFive">
                    <h2 className="mb-0">
                    <button className="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        Day 5
                    </button>
                    </h2>
                </div>
                <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                    <div className="card-text">
                        <div className="diet">
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Overnight Oats <br/>
                                    - Greek Yogurt <br/>
                                    - Berries
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Cottage Cheese with Fresh Berries
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Whole Grain Wraps <br/>
                                    - Whole grain wrap with tandoori chicken and bell peppers <br/>
                                    - Avocado
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Cod Fillet with boiled quinoa <br/>
                                    - Peas
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 
                                    {/* <a href="#">
                                        </a> */}
                                        Muscle gainig Shake
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="mt-3 day">
                <div className="card-heading" id="headingSix">
                    <h2 className="mb-0">
                    <button className="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Day 6
                    </button>
                    </h2>
                </div>
                <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                    <div className="card-text">
                        <div className="diet">
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Cod fillets <br/>
                                    - Boiled potatoes <br/>
                                    - Boiled green peas
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Mixed seeds and pear
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Multigrain Roti  <br/>
                                    - Chicken curry <br/>
                                    - Carrot salad
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Turkey Meatballs <br/>
                                    - Whole wheat Spaghetti <br/>
                                    - Spinach
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 
                                    {/* <a href="#">
                                        </a> */}
                                        Muscle gainig Shake
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="mt-3 day">
                <div className="card-heading" id="headingSeven">
                    <h2 className="mb-0">
                    <button className="btn  btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        Day 7
                    </button>
                    </h2>
                </div>
                <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                    <div className="card-text">
                        <div className="diet">
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Poached Eggs <br/>
                                    - Whole Grain Toast
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Greek Yogurt <br/>
                                    - Handful of Fresh Berries & Nuts
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Beef curry <br/>
                                    - Quinoa <br/>
                                    - Broccoli
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - Medium-sized Baked Potato <br/>
                                    - Tuna <br/>
                                    - Cheese <br/>
                                    - Green Salad
                                </div>
                            </div>
                            <div className="diet-row row m-0">
                                <div className="diet-text col-4 col-sm-4 col-md-6 col-lg-6 col-xl-6">Snack</div>
                                <div className="diet-text col-8 col-sm-8 col-md-6 col-lg-6 col-xl-6">
                                    - 
                                    {/* <a href="#">
                                        </a> */}
                                        Muscle gainig Shake
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div><br/>
            <i>For bulking eat full or more than hunger and for cutting eat in limit( slightly less than the hunger )</i><br/> <br/>

            <a href="https://www.healthifyme.com/blog/7-day-body-building-diet-the-ultimate-guide/" target="_blank" rel="noreferrer" >From Healthifyme.com</a>
        </h2>





    </div>
  )
}

export default MuscleGainDiet