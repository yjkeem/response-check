const $screen = document.querySelector('#screen');
  const $result = document.querySelector('#result');
  
  let startTime;
  let endTime;
  const records = [];
  let timeoutId;
  $screen.addEventListener('click', (event) => {
    if (event.target.classList.contains('waiting')) { // event.target은 사실상 $screen과 같다. $screen을 선택했으니까.
        $screen.classList.remove('waiting');
        $screen.classList.add('ready');
        $screen.textContent = '초록색이 되면 클릭하세요';
        timeoutId =  setTimeout(function () { 
            startTime = new Date();
            $screen.classList.remove('ready');
            $screen.classList.add('now');
            $screen.textContent = '클릭하세요!';
            // 첫 시간 재기
        }, Math.floor(Math.random() * 1000) + 2000); // 2000~3000 사이의 수
    } else if (event.target.classList.contains('ready')) {
        clearTimeout(timeoutId); // 위의 setTimeout이 실행되는 것을 막기 위해서 clearTimeout 사용
        $screen.classList.remove('ready');
        $screen.classList.add('waiting');
        $screen.textContent = '너무 성급하시군요!';
    } else if (event.target.classList.contains('now')) {
        endTime = new Date();   
        const current = endTime - startTime;
        records.push(current);
        const average = records.reduce((a, c) => a + c) / records.length;
        $result.textContent = `현재 ${current}ms, 평균: ${average}ms`;
        const topFive = records.sort((p, c) => p - c).slice(0, 5);
        topFive.forEach((top, index) => {
          $result.append(
            document.createElement('br'),
            `${index + 1}위: ${top}ms`,
          );
        });
        startTime = null; //혹시 모를 예전 값이 그대로 사용되는 경우를 방지하기 위해 사용
        endTime = null;
        $screen.classList.remove('now');
        $screen.classList.add('waiting');
        $screen.textContent = '클릭해서 시작하세요';
    }

    /* 최고 점수 내가 짠 코드
    if (records.length >= 5) {
    $result.append(document.createElement('br'),`1위: `, records.slice().sort((a, b) => a - b)[0]);
    $result.append(document.createElement('br'),`2위: `, records.slice().sort((a, b) => a - b)[1]);
    $result.append(document.createElement('br'),`3위: `, records.slice().sort((a, b) => a - b)[3]);
    $result.append(document.createElement('br'),`4위: `, records.slice().sort((a, b) => a - b)[4]);
    $result.append(document.createElement('br'),`5위: `, records.slice().sort((a, b) => a - b)[4]);
    }
   */
  });


