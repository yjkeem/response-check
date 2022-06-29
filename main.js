const $screen = document.querySelector('#screen');
const $result = document.querySelector('#result');

$screen.addEventListener('click', (event) => {
  if (event.target.classList.contains('waiting')) { // event.target은 사실상 $screen과 같다. $screen을 선택했으니까.
      $screen.classList.remove('waiting');
      $screen.classList.add('ready');
      $screen.textContent = '초록색이 되면 클릭하세요';
      setTimeout(function () {
          $screen.classList.remove('ready');
          $screen.classList.add('now');
          $screen.textContent = '클릭하세요!';
          // 첫 시간 재기
      }, Math.floor(Math.random() * 1000) + 2000); // 2000~3000 사이의 수
  } else if (event.target.classList.contains('ready')) {
      event.target.className = 'waiting';
      alert('너무 빨리 클릭했습니다.');
  } else if (event.target.classList.contains('now')) {
      // 끝 시간 재기
      // 시간 차이 저장하기
      event.target.className = 'waiting';
  }
})

