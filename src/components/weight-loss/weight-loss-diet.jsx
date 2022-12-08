import React from 'react';
import { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

function WeightLossDiet() {
    let [activeBtn] = useOutletContext();
    useEffect(()=>{
        activeBtn('diet');
        document.title = 'Weight Loss Diet -Street Thenics| Best Weight Loss Diet | Best Weight Loss Indian Food( Diet )  | Best Weight Loss Food | Best Weight Loss healthy Food';
    },[])
    return (
    <div id="diet" className=" weight-loss-page mt-5">

    <h1 className="heading-1">Best weight loss diet plan</h1>
    <h2 className="mt-3">
        So many people wants to lose weight and one of the best ways to lose weight is by changing your diet.
        <br/><br/>
        Yet, the sheer number of available diet plans may make it difficult to get started, as you’re unsure which one is most suitable, sustainable, and effective.
        <br/><br/>
        Some diets aim to curb your appetite to reduce your food intake, while others suggest restricting your intake of calories and either carbs or fat.
        <br/> All the diet plans are based on experience and proven results, may be effective for one but not for other. So choose a plan which suits you and showing some changes.
    </h2>

    <h1 className="heading-1 mt-3">Do Intermittent fasting</h1>
    <h2 className="mt-3">
        Intermittent fasting is a dietary strategy that cycles between periods of fasting and eating.
        <br/><br/>
        Various forms exist, including the 16/8 method, which involves limiting your calorie intake to 8 hours per day, and the 5:2 method, which restricts your daily calorie intake to 500–600 calories twice per week.
        <br/><br/>
        <strong>How it works:</strong> Intermittent fasting restricts the time you’re allowed to eat, which is a simple way to reduce your calorie intake. This can lead to weight loss — unless you compensate by eating too much food during allowed eating periods.
        <br/><br/>
        <strong>Weight loss:</strong> In a review of studies, intermittent fasting was shown to cause 3–8% weight loss over 3–24 weeks, which is a significantly greater percentage than other methods.

    </h2>
    <h1 className="heading-1 mt-3">1200 Calorie Indian Diet Plan</h1>
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
                            <div className="diet-heading col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Time</div>
                            <div className="diet-heading col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Diet</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">6:30 AM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Cucumber Detox Water (1 glass)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">8:00 AM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"><a target="_blank" rel="noreferrer"  href="https://www.amazon.in/gp/offer-listing/B01LYEV6RF/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B01LYEV6RF&linkCode=am2&tag=streetthenics-21&linkId=8958715a07ec8a1db19fdc0737da92f0">Oats Porridge</a> in Skimmed Milk (1 bowl)
                               <br/> Mixed Nuts (25 grams)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">12:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Skimmed Milk Paneer (100 grams)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">2:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Mixed Vegetable Salad (1 katori)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">2:10 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Dal(1 katori)Gajar Matar Sabzi (1 katori)
                               <br/> Roti (1 roti/chapati)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">4:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Cut Fruits (1 cup) Buttermilk (1 glass)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">5:30 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Tea with Less or no Sugar and Milk (1 teacup)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">8:50 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Mixed Vegetable Salad (1 katori)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">9:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Dal (1 katori) Lauki Sabzi (1 katori)
                               <br/> Roti (1 roti/chapati)</div>
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
                            <div className="diet-heading col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Time</div>
                            <div className="diet-heading col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Diet</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">6:30 AM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Cucumber Detox Water (1 glass)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">8:00 AM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Curd (1.5 katori) Mixed Vegetable Stuffed Roti (2 pieces)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">12:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Skimmed Milk Paneer (100 grams)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">2:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Mixed Vegetable Salad (1 katori)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">2:10 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Lentil Curry (0.75 bowl) Methi Rice (0.5 katori)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">4:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Apple (0.5 small (2-3/4″ dia)) Buttermilk (1 glass)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">5:30 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"><a target="_blank" rel="noreferrer"  href="https://www.amazon.in/gp/offer-listing/B00VK0FTP0/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B00VK0FTP0&linkCode=am2&tag=streetthenics-21&linkId=eb2e5604be107881fafff09e8306658a">Coffee</a> with Milk and Less Sugar (0.5 tea cup)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">8:50 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Mixed Vegetable Salad (1 katori)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">9:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Sauteed Vegetables with Paneer (1 katori) Roti (1 roti/chapati)
                                Green Chutney (2 tablespoon)</div>
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
                            <div className="diet-heading col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Time</div>
                            <div className="diet-heading col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Diet</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">6:30 AM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Cucumber Detox Water (1 glass)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">8:00 AM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Skim Milk <a target="_blank" rel="noreferrer"  href="https://www.amazon.in/gp/offer-listing/B08P7VDHK2/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B08P7VDHK2&linkCode=am2&tag=streetthenics-21&linkId=bfcc9e6abc21540d88981391fe9d989e">Yoghurt </a> (1 cup (8 fl oz)) <a target="_blank" rel="noreferrer"  href="https://www.amazon.in/gp/offer-listing/B09734YMRD/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B09734YMRD&linkCode=am2&tag=streetthenics-21&linkId=0292b31ae07e6053315afe4d842707a3">Multigrain Toast</a> (2 toast)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">12:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Skimmed Milk Paneer (100 grams)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">2:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Mixed Vegetable Salad (1 katori)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">2:10 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Sauteed Vegetables with Paneer (1 katori) Roti (1 roti/chapati)
                              <br/>  Green Chutney (2 tablespoon)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">4:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Banana (0.5 small (6″ to 6-7/8″ long)) Buttermilk (1 glass)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">5:30 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Tea with Less or no Sugar and Milk (1 teacup)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">8:50 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Mixed Vegetable Salad (1 katori)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">9:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">SauLentil Curry (0.75 bowl) Methi Rice (0.5 katori)</div>
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
                            <div className="diet-heading col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Time</div>
                            <div className="diet-heading col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Diet</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">6:30 AM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Cucumber Detox Water (1 glass)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">8:00 AM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Fruit and Nuts <a target="_blank" rel="noreferrer"  href="https://www.amazon.in/gp/offer-listing/B08P7VDHK2/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B08P7VDHK2&linkCode=am2&tag=streetthenics-21&linkId=bfcc9e6abc21540d88981391fe9d989e">Yoghurt </a> Smoothie (0.75 glass)
                              <br/>  Egg Omelette (1 serve(one egg))</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">12:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Skimmed Milk Paneer (100 grams)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">2:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Mixed Vegetable Salad (1 katori)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">2:10 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Fruit and Nuts <a target="_blank" rel="noreferrer"  href="https://www.amazon.in/gp/offer-listing/B08P7VDHK2/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B08P7VDHK2&linkCode=am2&tag=streetthenics-21&linkId=bfcc9e6abc21540d88981391fe9d989e">Yoghurt </a> Smoothie (0.75 glass)
                               <br/> Egg Omelette (1 serve(one egg))</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">4:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Orange (1 fruit (2-5/8″ dia)) Buttermilk (1 glass)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">5:30 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"><a target="_blank" rel="noreferrer"  href="https://www.amazon.in/gp/offer-listing/B00VK0FTP0/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B00VK0FTP0&linkCode=am2&tag=streetthenics-21&linkId=bdf301f27b45046d0f9bdadee089ba34">Coffee</a> with Milk and Less or no Sugar (0.5 teacup)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">8:50 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Mixed Vegetable Salad (1 katori)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">9:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Palak Chole (1 bowl) Steamed Rice (0.5 katori)</div>
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
                            <div className="diet-heading col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Time</div>
                            <div className="diet-heading col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Diet</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">6:30 AM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Cucumber Detox Water (1 glass)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">8:00 AM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Skimmed Milk (1 glass) Peas Poha (1.5 katori)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">12:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Skimmed Milk Paneer (100 grams)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">2:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Mixed Vegetable Salad (1 katori)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">2:10 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Low Fat Paneer Curry (1.5 katori) Missi Roti (1 roti)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">4:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Papaya (1 cup 1″ pieces) Buttermilk (1 glass)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">5:30 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Tea with Less or no Sugar and Milk (1 teacup)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">8:50 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Mixed Vegetable Salad (1 katori)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">9:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Curd (1.5 katori) Aloo Baingan Tamatar Ki Sabzi (1 katori)
                               <br/> Roti (1 roti/chapati)</div>
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
                            <div className="diet-heading col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Time</div>
                            <div className="diet-heading col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Diet</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">6:30 AM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Cucumber Detox Water (1 glass)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">8:00 AM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Mixed Sambar (1 bowl) Idli (2 idli)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">12:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Skimmed Milk Paneer (100 grams)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">2:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Mixed Vegetable Salad (1 katori)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">2:10 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Curd (1.5 katori) Aloo Baingan Tamatar Ki Sabzi (1 katori)
                               <br/> Roti (1 roti/chapati)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">4:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Cut Fruits (1 cup) Buttermilk (1 glass)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">5:30 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6"><a target="_blank" rel="noreferrer"  href="https://www.amazon.in/gp/offer-listing/B00VK0FTP0/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=B00VK0FTP0&linkCode=am2&tag=streetthenics-21&linkId=bdf301f27b45046d0f9bdadee089ba34">Coffee</a> with Milk and Less or no Sugar (0.5 tea cup)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">8:50 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Mixed Vegetable Salad (1 katori)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">9:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Green Gram Whole Dal Cooked (1 katori)Bhindi sabzi (1 katori)
                               <br/> Roti (1 roti/chapati)</div>
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
                            <div className="diet-heading col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Time</div>
                            <div className="diet-heading col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Diet</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">6:30 AM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Cucumber Detox Water (1 glass)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">8:00 AM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Besan Chilla (2 cheela) Green Garlic Chutney (3 tablespoon)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">12:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Skimmed Milk Paneer (100 grams)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">2:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Mixed Vegetable Salad (1 katori)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">2:10 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Palak Chole (1 bowl) Steamed Rice (0.5 katori)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">4:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Apple(0.5 small (2-3/4″ dia)) Buttermilk (1 glass)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">5:30 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Tea with Less Sugar and Milk (1 teacup)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">8:50 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Mixed Vegetable Salad (1 katori)</div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">9:00 PM</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Low Fat Paneer Curry (1 katori) Missi Roti (1 roti)</div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </h2>
    <div className="mt-3">
        <a href="https://www.healthifyme.com/blog/best-indian-diet-plan-weight-loss/" target="_blank" rel="noreferrer" >From Healthifyme.com</a>
    </div>

    <h1 className="heading-1 mt-5">Premium diet meal plan</h1>
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
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 1/2 cup egg whites scrambled with 1 teaspoon olive oil, 1 teaspoon chopped basil, 1 teaspoon grated Parmesan, and 1/2 cup cherry tomatoes <br/>
                                - 1 slice whole-grain toast <br/>
                                - 1/2 cup blueberries <br/>
                                - 1 cup skim milk
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Snack</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 1/2 cup fat-free Greek yogurt topped with 1/4 cup sliced strawberries
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - Salad made with: 3/4 cup cooked bulgur, 4 ounces chopped grilled chicken breast, 1 tablespoon shredded low-fat cheddar, diced grilled veggies (2 tablespoons onion, 1/4 cup diced zucchini, 1/2 cup bell pepper), 1 teaspoon chopped cilantro, and 1 tablespoon low-fat vinaigrette 
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Snack</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 2 tablespoons hummus and 6 baby carrots
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 4 ounces grilled salmon <br/>
                                - 1 cup wild rice with 1 tablespoon slivered toasted almonds <br/>
                                - 1 cup wilted baby spinach with 1 teaspoon each olive oil, balsamic vinegar, and grated Parmesan <br/>
                                - 1/2 cup diced cantaloupe topped with <br/>
                                - 1/2 cup all-fruit raspberry sorbet and 1 teaspoon chopped walnuts
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
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 3/4 cup steel-cut or old-fashioned oatmeal prepared with water; stir in 1/2 cup skim milk <br/>
                                - 2 links country-style turkey sausage <br/>
                                - 1 cup blueberries
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Snack</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 1/2 cup fat-free ricotta cheese with 1/2 cup raspberries and 1 tablespoon chopped pecans
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - Turkey burger (or any other burger) <br/>
                                - Salad made with: 1 cup baby spinach, 1/4 cup halved cherry tomatoes, 1/2 cup cooked lentils, 2 teaspoons grated Parmesan, and 1 tablespoon light Russian dressing <br/>
                                - 1 cup skim milk
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Snack</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 1/2 cup fat-free cottage cheese with 1/2 cup salsa
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 1 turkey burger <br/>
                                - 3/4 cup roasted cauliflower and broccoli florets <br/>
                                - 3/4 cup brown rice <br/>
                                - 1 cup spinach salad with 1 tablespoon light balsamic vinaigrette
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
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - Omelet made with 4 egg whites and 1 whole egg, 1/4 cup chopped broccoli, 2 tablespoons each fat-free refried beans, diced onion, diced mushrooms, and salsa <br/>
                                - Quesadilla made with 1/2 of one small corn tortilla and 1 tablespoon low-fat jack cheese <br/>
                                - 1/2 cup diced watermelon
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Snack</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 1/2 cup fat-free vanilla yogurt with 1 sliced apple and 1 tablespoon chopped walnuts
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - Salad made with 2 cups chopped Romaine, 4 ounces grilled chicken, 1/2 cup chopped celery, 1/2 cup diced mushrooms, 2 tablespoons shredded low-fat cheddar, and 1 tablespoon low-fat Caesar dressing <br/>
                                - 1 medium nectarine <br/>
                                - 1 cup skim milk
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Snack</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 1 fat-free mozzarella string cheese stick <br/>
                                - 1 medium orange
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 4 ounces shrimp, grilled or sauteed with 1 teaspoon olive oil and 1 teaspoon chopped garlic <br/>
                                - 1 medium artichoke, steamed <br/>
                                - 1/2 cup whole wheat couscous with 2 tablespoons diced bell pepper, 1/4 cup garbanzo beans, 1 teaspoon chopped fresh cilantro, and 1 tablespoon fat-free honey mustard dressing
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
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 1 light whole-grain English muffin with 1 tablespoon nut butter and 1 tablespoon sugar-free fruit spread <br/>
                                - 1 wedge honeydew <br/>
                                - 1 cup skim milk <br/>
                                - 2 slices Canadian bacon
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Snack</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - Yogurt parfait made with 1 cup low-fat vanilla yogurt, 2 tablespoons sliced strawberries or raspberries, and 2 tablespoons low-fat granola
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - Wrap made with 4 ounces thinly sliced lean roast beef, 1 6-inch whole wheat tortilla, 1/4 cup shredded lettuce, 3 medium tomato slices, 1 teaspoon horseradish, and 1 teaspoon Dijon mustard <br/>
                                - 1/2 cup pinto beans or lentils with 1 teaspoon chopped basil and 1 tablespoon light Caesar dressing
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Snakc</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 8 baked corn chips with 2 tablespoons guacamole (try <a href="https://www.shape.com/healthy-eating/10-amazing-recipes-help-you-celebrate-national-guacamole-day" target="_blank" rel="noreferrer" >one of these guac recipes</a> )
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 4 ounces grilled halibut <br/>
                                - 1/2 cup sliced mushrooms sauteed with 1 teaspoon olive oil, 1/4 cup chopped yellow onion, and 1 cup green beans <br/>
                                - Salad made with 1 cup arugula, 1/2 cup halved cherry tomatoes, and 1 teaspoon balsamic vinaigrette <br/>
                                - 1/2 cup warm unsweetened applesauce with 1/4 cup fat-free vanilla yogurt <br/>
                                - 1 tablespoon chopped pecans and dash cinnamon
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
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - Burrito made with: 1 medium whole wheat tortilla, 4 scrambled egg whites, 1 teaspoon olive oil, 1/4 cup fat-free refried black beans, 2 tablespoons salsa, 2 tablespoons grated low-fat cheddar, and 1 teaspoon fresh cilantro <br/>
                                - 1 cup mixed melon
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Snack</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 3 ounces sliced lean ham <br/>
                                - 1 medium apple
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - Turkey burger (or any other burger) <br/>
                                - Salad made with: 1 cup baby spinach, 1/4 cup halved cherry tomatoes, 1/2 cup cooked lentils, 2 teaspoons grated Parmesan, and 1 tablespoon light Russian dressing <br/>
                                - 1 cup skim milk
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Snack</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 1 fat-free mozzarella string cheese stick <br/>
                                - 1 cup red grapes
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 5 ounces grilled wild salmon  <br/>
                                - 1/2 cup brown or wild rice <br/>
                                - 2 cups mixed baby greens with 1 tablespoon low-fat Caesar dressing <br/>
                                - 1/2 cup all-fruit strawberry sorbet with 1 sliced pear
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
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - Frittata made with 3 large egg whites, 2 tablespoons diced bell peppers, 2 teaspoons chopped spinach, 2 tablespoons part-skim shredded mozzarella, and 2 teaspoons pesto 1/2 cup fresh raspberries <br/>
                                - 1 small bran muffin <br/>
                                - 1 cup skim milk
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Snack</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 1/2 cup low-fat vanilla yogurt with 1 tablespoon ground flaxseed and 1/2 cup diced pear
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 4 ounces sliced turkey breast <br/>
                                - Tomato-cucumber salad made with 5 slices tomato, 1/4 cup sliced cucumber, 1 teaspoon fresh chopped thyme, and 1 tablespoon fat-free Italian dressing <br/>
                                - 1 medium orange
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Snack</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - Smoothie made with 3/4 cup skim milk, 1/2 banana, 1/2 cup low-fat yogurt, and 1/4 cup sliced strawberries 
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 4 ounces red snapper baked with 1 teaspoon olive oil, 1 teaspoon lemon juice, and 1/2 teaspoon no-sodium seasoning <br/>
                                - 1 cup spaghetti squash with 1 teaspoon olive oil and 2 teaspoon grated Parmesan cheese <br/>
                                - 1 cup steamed green beans with 1 tablespoon slivered almonds
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
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Breakfast</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 2 slices Canadian bacon <br/>
                                - 1 whole-grain toaster waffle with sugar-free fruit spread <br/>
                                - 3/4 cup berries <br/>
                                - 1 cup skim milk
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Snack</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 1/4 cup fat-free cottage cheese with 1/4 cup cherries and 1 tablespoon slivered almonds
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Lunch</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - Salad made with: 2 cups baby spinach, 4 ounces grilled chicken, 1 tablespoon chopped dried cranberries, 3 slices avocado, 1 tablespoon slivered walnuts, and 2 tablespoons low-fat vinaigrette <br/>
                                - 1 apple <br/>
                                - 1 cup skim milk
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Snack</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 1/4 cup plain fat-free Greek yogurt with 1 tablespoon sugar-free fruit spread and 1 tablespoon ground flaxseed <br/>
                                - 1/4 cup blueberries
                            </div>
                        </div>
                        <div className="diet-row row m-0">
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">Dinner</div>
                            <div className="diet-text col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                - 4 ounces lean pork tenderloin stir-fried with onions, garlic, broccoli, and bell pepper <br/>
                                - 1/2 cup brown rice <br/>
                                - 5 medium tomato slices with 1 teaspoon each chopped ginger, chopped cilantro, light soy sauce, and rice wine vinegar
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </h2>
    <div className="mt-3">
        <a href="https://www.shape.com/weight-loss/tips-plans/7-day-diet-plan-weight-loss" target="_blank" rel="noreferrer" >From shape .com</a>
    </div>


</div>
  )
}

export default WeightLossDiet