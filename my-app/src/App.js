import './App.css';
import React, {useState } from 'react';


const GodsProperty = {
  "信實的神":{
      explanation:["上帝的話語永遠可信，祂從不食言也不會讓我們失望，我們可以大膽向祂祈求，向祂禱告"]
  },
  "慈愛的神":{
      explanation:["上帝無條件地愛我們，不管我們是誰或做了什麼，祂接納我們的一切"]
  },
  "全能的神":{
      explanation:["在神凡事都能，只要相信就必成就，除了大大呼求，也要大膽信靠"]
  },
  "全知的神":{
      explanation:["上帝知道一切，祂明白我們正在面對的挑戰和需要，祂會陪我們一起"]
  },
  "憐憫的神":{
      explanation:["上帝願意原諒我們，給我們重新開始的機會，也期待我們能用憐憫的眼光祝福別人"]
  },
  "賜下恩典的神":{
      explanation:["上帝很樂意給我們祝福，也希望我們敞開心享受在祂的恩典中"]
  },
  "良善的神":{
      explanation:["上帝的旨意都是美好的，祂希望把最好的給我們"]
  },
  "充滿智慧的神":{
      explanation:["上帝知道什麼對我們最好，祂的計畫最完美，祂希望我們全然相信祂的帶領"]
  },
  "供應的神":{
      explanation:["上帝會照顧我們，讓我們擁有生活所需的一切"]
  },
  "醫治的神":{
      explanation:["上帝能夠幫助我們在身心靈都恢復健康，讓我們的心靈充滿希望"]
  },
  "拯救的神":{
      explanation:["上帝幫助我們脫離困境，帶領我們走出黑暗，我們可以將一切全部交給祂，由祂為我們承擔"]
  },
  "保護的神":{
      explanation:["上帝像盾牌一樣保護我們，帶給我們滿滿的安全感，有祂在就不害怕"]
  },
  "賜下聰明才智的神":{
      explanation:["敬畏耶和華是智慧的開端，認識至聖者便是聰明，祂讓我們擁有祂的智慧"]
  },
  "和睦的神":{
      explanation:["上帝是恢復關係，使人和好的神"]
  },
  "饒恕的神":{
      explanation:["上帝接納我們的一切，即便我們犯錯祂也願意饒恕我們，而祂也鼓勵我們學像耶穌饒恕別人"]
  },
  "創造的神":{
      explanation:["上帝創造萬物，包括我們每個人都是祂美好的創造"]
  }
}




function App() {
  const [selectedProperty, setSelectedProperty] = useState('');
  const [selectedExplanation, setSelectedExplanation] = useState('');

    const getRandomExplain = () => {
        const gods_property = Object.keys(GodsProperty);
        const randomGodsProperty = gods_property[Math.floor(Math.random() * gods_property.length)];
        
        const explanation = GodsProperty[randomGodsProperty].explanation;
        const randomExplanation = explanation[Math.floor(Math.random() * explanation.length)];

        setSelectedProperty(randomGodsProperty);
        setSelectedExplanation(randomExplanation);
    }

    return (
        <div className='container'>
          <title>God's Card</title>
            <h1>天父小卡</h1>
            {selectedProperty && <h2 className='title-words'>{selectedProperty}</h2>}
            {selectedExplanation && <p className='content-words'>{selectedExplanation}</p>}
            <button onClick={getRandomExplain}>Choose One</button>
            
        </div>
    );
}

export default App;