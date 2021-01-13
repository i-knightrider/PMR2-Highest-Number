/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    //Math.random will generate random number between 0 to 1
    //Math.floor is for converting the random value to the nearest integer like if random generate 0.7, Math.floor will give 0
    //We are multiplying 12345 in Maths.random() because if Math.floor is used, it will convert
    //the number into 0 because 0 is the nearest integer. Therefore if value is 0.0009, it will be first multiplied by
    //12345, then Math.floor will do it work.   
        var a = Math.floor(Math.random()*12345);
        //.length method works on string only!
        var str = a + "";
        //We want 4 digit number 
        if(str.length == 4){
              document.getElementById("random").innerHTML = a;
              //storing it in value
              var value = a;
        }
        else if(str.length == 2){
            //here we are not adding 12, we are concatenating it with the 2 digit number.
            var digit2 = a+""+Math.floor(Math.random()+12);
            document.getElementById("random").innerHTML = digit2;
            //parsing digit2 into integer and storing in value
            var value = parseInt(digit2);
        }
        else if(str.length == 3){
            var digit3 = a+""+Math.floor(Math.random()+2)
            document.getElementById("random").innerHTML = digit3 ;
            var value = parseInt(digit3);
        }
        else if(str.length == 1){
            var digit4 = a+""+Math.floor(Math.random()+234);
            document.getElementById("random").innerHTML = digit1;
            var value = parseInt(digit1);
        }
        else if(str.length == 5){
            var digit5 = str.substring(1);
            document.getElementById("random").innerHTML = digit5;
            var value = parseInt(digit5);
        }
        else if(str.length == 6){
            var digit6 = str.substring(2);
            document.getElementById("random").innerHTML = digit6;
            var value = parseInt(digit6);
        }
        document.getElementById("resultButton").addEventListener('click',buttonClick);
        function buttonClick(){
            //again converting value to string
            var strvalue = value.toString();
            //storing individual numbers to array. Array.from() method will store our value to array.
            // like we have Array.from(abc) and abc=1324, then Array.from() will create array as= [1,3,2,4]
            var array = Array.from(strvalue);
            //sort() will sort our array in ascending order= [1,2,3,4]
            array.sort();
            //reverse() will reverse the array= [4,3,2,1]
            var sortedArray = array.reverse();
            //join() will make array string. If we do not use join('') and use only join(), it will seperate the values by comma= 4,3,2,1
            //but we use join(''), so the outpur will be= 4321
            var joinedArray = sortedArray.join('');
            //Now we are taking user input and compariung it to our answer:
            var userAnswer = document.getElementById("answer").value;
            if(userAnswer==joinedArray){
                document.getElementById("result").innerHTML = "Your answer is correct!"
            }
            else{
                document.getElementById("result").innerHTML = "Your answer is not correct. Please try again."
            }
        }

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}
