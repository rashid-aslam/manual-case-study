import React, { useState } from 'react';
import Quiz from './quiz/Quiz';
import QuizButton from './quiz/QuizButton';
import PlainLayout from "../components/PlainLayout"

const LandingPage = () => {
  const [plainLayout, setPlainLayout] = useState(false);
  const [showQuiz, setShowQuiz] = useState(false);

  if (showQuiz) {
    return (
      <PlainLayout>
        <Quiz setShowQuiz={setShowQuiz} />
      </PlainLayout>
    );
  }

  return (
    <div className="container">
      <div className="headerLayer">
        {/* <img src="img/hair-cat-header.jpg" srcSet="img/hair-cat-header@2x.jpg 2x, img/hair-cat-header@3x.jpg 3x" alt="hair category header image" className="hairCat-header" /> */}
        <img src="img/manual-symblol.svg" className="manual-symblol manual-symblol-position" />
        <div className="BE-GOOD-TO-YOURSELF">be good to yourself</div>
        <div className="Were-working-around">We’re working around the clock to bring you a holistic approach to your wellness. From top to bottom, inside and out.</div>
        <QuizButton clickHandler={() => setShowQuiz(true)} />
        {/* <img src="img/hair-cat-header.jpg" srcSet="img/hair-cat-header@2x.jpg 2x, img/hair-cat-header@3x.jpg 3x" className="hairCat-header" /> */}
        
      </div>

      <div className="content-area">
        <div className="What-we-can-help-wit">What we can help with</div>
        <section className="hair-loss-section">
          <div className="zero-one-grey">01</div>
          <img src="img/hair-photo-1-2-x.jpg" srcSet="img/hair-photo-1-2-x@2x.jpg 2x, img/hair-photo-1-2-x@3x.jpg 3x" alt="hair photo" className="hair-photo-12x hair-photo-position" />
          <div className="HAIR-LOSS-group">
            <div className="HAIR-LOSS">Hair Loss</div>
            <div className="Hair-loss-neednt-be-HEADING">Hair loss needn’t be irreversible. We can help!</div>
            <div className="Hair-loss-neednt-be">Hair loss needn’t be irreversible. 
              There’s a scientifically proven way that’s most effective in keeping and regrowing your hair. 
              It’s all to do with blocking a pesky hormone called DHT. 
              That’s the bad guy behind hair loss. 
              And you can keep him at bay. 
              The choice is yours.</div>
          </div>
        </section>

        <section className="ED-section">
          <img src="img/sex-photo-1-2-x.jpg" srcSet="img/sex-photo-1-2-x@2x.jpg 2x, img/sex-photo-1-2-x@3x.jpg 3x" alt="intimacy photo" className="sex-photo-12x sex-photo-position" />
          <div className="zero-two-grey">02</div>
          <div className="ED-group">
            <div className="Erectile-Dysfunction">Erectile Dysfunction</div>
            <div className="Erections-can-be-a-t">Erections can be a tricky thing. But no need to feel down!</div>
            <div className="There-are-plenty-of">There are plenty of reasons why you might be having difficulty in the erection department. We can help you figure out possible reasons why. And prescribe a pill if needed.</div>
          </div>
        </section>
      </div>
      
      <div className="Rectangle-footer">
        <table className="footer-boxes">
          <tr>
            <td>
              <img src="img/manual-symblol.svg" className="manual-symblol manual-symblol-large" />
            </td>
            <td>
              <span className="PRODUCT">PRODUCT</span>
              <div className="Popular-Trending-Gui">
                Popular<br />
                Trending<br />
                Guided<br />
                Products
              </div>
            </td>
            <td>
              <span className="COMPANY">COMPANY</span>
              <div className="Press-Releases-Missi">
                Press Releases<br />
                Mission<br />
                Strategy<br />
                About
              </div>
            </td>
            <td>
              <span className="INFO">INFO</span>
              <div className="Support-Customer-Ser">
                Support<br />
                Customer Service<br />
                Get Started Guided
              </div>
            </td>
            <td>
              <span className="FOLLOW-US">FOLLOW US</span>
              <div className="social-box">
                <img src="img/shape-f.svg" className="Shape-f" />
                <img src="img/shape-t.svg" className="Shape-t" />
                <img src="img/shape-in.svg" className="Shape-in" />
              </div>
            </td>
          </tr>
        </table>
        <div className="copy-right-text">© 2019 Manual. All rights reserved.</div>
      </div>

    </div>
  )
}

export default LandingPage;
