        document.addEventListener('DOMContentLoaded', () => {
            //Primjer 1:
        // 1. 
        document.getElementById('myParagraph').textContent = 'Novi tekst';
      
        // 2. 
        document.getElementById('myElement').style.backgroundColor = 'red';
      
        // 3. 
        document.getElementById('myElement').classList.remove('highlight');
      
        // 4. 
        document.getElementById('myElement').classList.add('active');
      
        // 6. 
        const inputValue = document.getElementById('myInput').value;
        console.log(inputValue);
      
        // 7. 
        document.getElementById('myElement').style.display = 'none';
      
        // 8. 
        document.getElementById('myImage').src = './assets/images/druga-slika.jpg';
      
        // 9. 
        const boxes = document.querySelectorAll('.box');
        boxes.forEach(box => {
          box.textContent = 'Box';
        });
      
        // 10. 
        boxes.forEach(box => {
          box.remove();
        });
      
        // 11. 
        const newParagraph = document.createElement('p');
        newParagraph.textContent = 'Novi paragraf';
        document.body.appendChild(newParagraph);
        //Zadatak 2:
        // 1.
        const paragraphs = document.querySelectorAll('p');
        paragraphs.forEach(paragraph => {
          paragraph.style.fontSize = '20px';
        });
      
        // 2.
        const button = document.getElementById('myButton');
        button.addEventListener('mouseover', () => {
          button.style.backgroundColor = 'blue';
        });
        button.addEventListener('mouseout', () => {
          button.style.backgroundColor = '';
        });
      
        // 3.
        paragraphs.forEach(paragraph => {
          paragraph.addEventListener('click', () => {
            console.log('Paragraf je kliknut');
          });
        });
      
        // 4.
        document.body.style.backgroundImage = 'url("./assets/images/background.jpg")';
        document.body.style.backgroundSize = 'cover';
      
        // 5.
        const colorSelect = document.getElementById('colorSelect');
        colorSelect.addEventListener('change', () => {
          const selectedColor = colorSelect.value;
          document.getElementById('myElement').style.backgroundColor = selectedColor;
        });
      
        // 6.
        const myInput = document.getElementById('myInput');
        myInput.addEventListener('input', () => {
          console.log(myInput.value);
        });
      
        // 7.
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach(element => {
          element.style.display = 'none';
        });
      
        // 8.
        myInput.addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            const newText = myInput.value;
            const newPara = document.createElement('p');
            newPara.textContent = newText;
            document.body.appendChild(newPara);
            myInput.value = '';  
          }
        });
      
        // 9.
        const boxElements = document.querySelectorAll('.box');
        boxElements.forEach(box => {
          box.addEventListener('mouseover', () => {
            box.style.color = 'red';
          });
          box.addEventListener('mouseout', () => {
            box.style.color = '';
          });
        });
      
        // 10.
        const stickyElement = document.getElementById('stickyElement');
        stickyElement.style.position = 'fixed';
        stickyElement.style.top = '0';
      });
      