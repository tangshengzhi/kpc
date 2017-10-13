import Intact from 'intact';
import template from './index.vdt';
import './index.styl';

export default class extends Intact {
    @Intact.template()
    get template() { return template; }

    defaults() {
        return {
            checkType: 'checkbox', // radio | none 
            rowKey(value, index) { return index; },
        }
    }
}