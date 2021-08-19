import negativeOneToNegativeSix from "../../images/weather-images/-1_-6.png";
import negativeSevenToNegativeTen from "../../images/weather-images/-7_-10.png";
import negativeElevenBelow from "../../images/weather-images/-11below.png";
import fourToZero from "../../images/weather-images/4-0.png";
import fiveToFourteen from "../../images/weather-images/5-14.png";
import fifteenToTwentyTwo from "../../images/weather-images/15-22.png";
import twentySixAbove from "../../images/weather-images/26up.png";
export default {
    data: () => ({
        negativeOneToNegativeSix,
        negativeSevenToNegativeTen,
        negativeElevenBelow,
        fourToZero,
        fiveToFourteen,
        fifteenToTwentyTwo,
        twentySixAbove
    }),
    methods: {
        viewTempImage(temp) {
            if (temp >= 26) {
                return twentySixAbove;
            } else if (temp < 26 && temp > 14) {
                return fifteenToTwentyTwo;
            } else if (temp > 4 && temp < 15) {
                return fiveToFourteen;
            } else if (temp > 1 && temp < 5) {
                return fourToZero;
            } else if (temp < 0 && temp > -7) {
                return negativeOneToNegativeSix;
            } else if (temp < -7 && temp > -10) {
                return negativeSevenToNegativeTen;
            } else if (temp < -10) {
                return negativeElevenBelow;
            }
        }
    }
}