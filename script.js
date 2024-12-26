const directions = ['up', 'down', 'left', 'right'];
const letters = ['E', 'C'];
let currentDirection = '';
let currentLetter = '';
let currentFontSize = 1.0;  // 初始字體大小設定為1.0

function getRandomDirection() {
    const randomIndex = Math.floor(Math.random() * directions.length);
    return directions[randomIndex];
}

function getRandomLetter() {
    const randomIndex = Math.floor(Math.random() * letters.length);
    return letters[randomIndex];
}

function nextLetter() {
    // 隨機選擇字母和方向
    currentLetter = getRandomLetter();
    currentDirection = getRandomDirection();

    // 顯示字母並旋轉到隨機方向
    const letterElement = document.getElementById('letter');
    letterElement.textContent = currentLetter;

    // 根據選擇的字體大小來調整字母的大小
    // letterElement.style.fontSize = `${currentFontSize * 100}px`;  // 字體大小從0.1到1.2，換算成像素
    letterElement.style.fontSize = `${currentFontSize * 13}em`;  // 字體大小從0.1到1.2，換算成像素

    // 重置方向
    letterElement.style.transform = '';

    if (currentLetter === 'E') {
        // 根據隨機方向旋轉字母 E
        if (currentDirection === 'up') {
            letterElement.style.transform = 'rotate(-90deg)';
        } else if (currentDirection === 'down') {
            letterElement.style.transform = 'rotate(90deg)';
        } else if (currentDirection === 'left') {
            letterElement.style.transform = 'rotate(180deg)';
        } else if (currentDirection === 'right') {
            letterElement.style.transform = 'rotate(0deg)';
        }
    } else if (currentLetter === 'C') {
        // 根據隨機方向旋轉字母 C
        if (currentDirection === 'up') {
            letterElement.style.transform = 'rotate(-90deg)';
        } else if (currentDirection === 'down') {
            letterElement.style.transform = 'rotate(90deg)';
        } else if (currentDirection === 'left') {
            letterElement.style.transform = 'rotate(180deg)';
        } else if (currentDirection === 'right') {
            letterElement.style.transform = 'rotate(0deg)';
        }
    }

    // 清空反饋
    document.getElementById('feedback').textContent = '';
}

function checkDirection(selectedDirection) {
    const feedbackElement = document.getElementById('feedback');

    if (selectedDirection === currentDirection) {
        feedbackElement.textContent = '正確！';
        feedbackElement.style.color = 'green';
    } else {
        feedbackElement.textContent = '錯誤，試試看下一個！';
        feedbackElement.style.color = 'red';
    }
}

// 更新字體大小
function changeFontSize(size) {
  const buttons = document.querySelectorAll('.font-size-buttons button');
  // 移除所有按鈕的選中樣式
  buttons.forEach(button => button.classList.remove('selected'));

  // 確保 size 是字串，並保證有小數點
  let sizeString = size.toFixed(1);  // 使用 toFixed(1) 保證小數位數為1
  const buttonId = `btn-${sizeString}`;  // 生成與 id 對應的字串

  // 確保選中正確的按鈕
  const selectedButton = document.getElementById(buttonId);
  if (selectedButton) {
      selectedButton.classList.add('selected');
  } else {
      console.error(`Button with ID ${buttonId} not found.`);
  }

  currentFontSize = size;
  nextLetter();  // 更新字體大小後重新顯示字母
}


// 初次啟動時顯示一個隨機字母
nextLetter();
