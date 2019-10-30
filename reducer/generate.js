import * as types from '../actions/types.js';
import { QR_STATE } from './typeOfState.js';
import cloneDeep from 'clone-deep'

import { GenConstants } from "../screens/toGeneration/Generate";
import { SET_IP } from "../actions/types";

const defaultGenerate = {
     info: {
         activeId: 0,
         questions: [
             {
                 text: "Как получить приз",
                 id: "1",
             },
             {
                 text: "Как я узнаю, что я победитель",
                 id: "2",
             }
         ],
         question_page: [
             [
                 {type: GenConstants.Head1, text:"Правила розыгрыша"},
                 {type: GenConstants.Paragraph, text:"adfasdfadfasdfadfadfaff" +
                         "fadfadfadfadfadfcadfadf" +
                         "adfadfafadfafadsssadfadfadsf" +
                         "adfadfasdfasdfasdfasdfafsdf"
                 },
                 {type: GenConstants.Head2, text: "Ну опять"},
                 {type: GenConstants.Paragraph, text:"adfasdfadfasdfadfadfaff" +
                     "fadfadfadfadfadfcadfadf" +
                     "adfadfafadfafadsssadfadfadsf" +
                     "adfadfasdfasdfasdfasdfafsdf"
                 },
             ],
             [
                 {type: GenConstants.Head1, text: "Что бы получить приз нужно"},
                 {type: GenConstants.Paragraph, text: "У нас тото сёто и так далее"}
             ],
             [
                 {type: GenConstants.Head1, text: "Как я узнаю что я победитель"},
                 {type: GenConstants.Paragraph, text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore ex, harum illo impedit quam repudiandae.\n"},
                 {type: GenConstants.Anchor, text:"Узнать как жить", url:"http://www.reduser.net/forum/forum.php"}
             ]


         ],
     },
     menu_rej:{
        text1:"Введите ваш номер телофона ,для того чтобы сканировать чеки и учавствовать в розыгрыве",
     },

}

export default function (state = defaultGenerate, action) {
    switch (action.type) {
        case SET_IP:
            const newState = cloneDeep(state);
            newState.info.activeId = action.id
            return newState;
        case "1":
            return 1
        default:
            return state;
    }
};