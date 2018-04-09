import layout from 'layout';

import content from './content.html';

export default (new Function('', layout)())({
    title: '我是标题',
    content
})