// https://leetcode.com/problems/design-a-text-editor


// var TextEditor = function() {
    
// };

// /** 
//  * @param {string} text
//  * @return {void}
//  */
// TextEditor.prototype.addText = function(text) {
    
// };

// /** 
//  * @param {number} k
//  * @return {number}
//  */
// TextEditor.prototype.deleteText = function(k) {
    
// };

// /** 
//  * @param {number} k
//  * @return {string}
//  */
// TextEditor.prototype.cursorLeft = function(k) {
    
// };

// /** 
//  * @param {number} k
//  * @return {string}
//  */
// TextEditor.prototype.cursorRight = function(k) {
    
// };

/** 
 * Your TextEditor object will be instantiated and called as such:
 * var obj = new TextEditor()
 * obj.addText(text)
 * var param_2 = obj.deleteText(k)
 * var param_3 = obj.cursorLeft(k)
 * var param_4 = obj.cursorRight(k)
 */

//  class TextEditor {
//   constructor() {
//     this.currentText = '';
//     this.cursorPosition = 0;
//   }
  
//   addText(text) {
//       this.currentText += text
//       this.cursorPosition = this.currentText.length
//       console.log(this.currentText)
//   }
  
//   deleteText(k) {
//       let currentTextLength = this.currentText.length
//       for (let i = 0; i < this.currentText.length; i++) {
//           this.cursorPosition--
//           this.currentText = this.currentText.slice(0, -1)
//       }
//       return currentTextLength - this.currentText.length
//   }
  
//   cursorLeft(k) {
//       let currentText = this.currentText
//       this.cursorPosition -= k

//       for (let i = 0; i < this.cursorPosition; i++) {
//           currentText = currentText.slice(0, -1)
//       }

//       let strLen = currentText.length - Math.min(10, currentText.length)
      

//       for (let i = 0; i < strLen; i++) {
//           currentText = currentText.slice(0, -1)
//       }

//       return currentText
     
//   }
  
//   cursorRight(k) {
//   }
// }

class TextEditor {
    constructor() {
        this.currentText=''
        this.currentPosition=0
        this.currentLength=0
    }
    addText(text) {
        if(this.currentLength === 0 || this.currentPosition === this.currentLength) {
            this.currentText+=text
            this.currentPosition=this.currentText.length
            this.currentLength=this.currentText.length

            return
        }
        let leftStr = this.currentText.slice(0, this.currentPosition)
        let rightStr=this.currentText.slice(this.currentPosition)

        this.currentText=leftStr+text
        this.currentPosition=this.currentText.length

        this.currentText+=rightStr
        this.currentLength=this.currentText.length
    }

    deleteText(k) {
        if(k > this.currentPosition) {
            let deleted = this.currentPosition
            this.currentText=this.currentText.slice(this.currentPosition)

            this.currentPosition=0
            this.currentLength=this.currentText.length

            return deleted
        }
        let leftStr=this.currentText.slice(0, this.currentPosition-k)
        let rightStr=this.currentText.slice(this.currentPosition)

        this.currentText=leftStr
        this.currentPosition=this.currentText.length
        this.currentText+=rightStr
        this.currentLength=this.currentText.length

        return k
    }
    cursorLeft(k) {
        if(k<=this.currentPosition) {
            this.currentPosition-=k
        } 
        else {
            this.currentPosition=0
        }
        if(this.currentPosition <= 10) {
            return this.currentText.slice(0, this.currentPosition)
        }

        return this.currentText.substr(this.currentPosition-10, 10)
        
    }
    cursorRight(k) {
        if(k<=this.currentLength-this.currentPosition) {
            this.currentPosition+=k
        } else {
            this.currentPosition=this.currentLength
        }
    
        if(this.currentPosition <= 10) {
            return this.currentText.slice(0, this.currentPosition)
        }
        
        return this.currentText.substr(this.currentPosition-10, 10)
    }
}