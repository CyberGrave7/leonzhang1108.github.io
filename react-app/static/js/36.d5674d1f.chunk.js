webpackJsonp([36],{166:function(r,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=function(r,n,e){var o={v:0,index:-1};return e.some(function(e,v){var a=e.x===r&&e.y===n;return a&&(o={v:e.v,index:v}),a}),o};n.default={moveRight:function(r){for(var n=!1,e=function(e){for(var v=3,a=function(o){var a=-1;!r.some(function(r,n){var i=r.x===o+1&&r.y===e;return r.x===o&&r.y===e&&(a=n),i&&v--,i})&&a>=0&&(r[a].x=v,n=!0,v--)},i=2;i>=0;i--)a(i);for(i=2;i>=0;i--){var f=o(i,e,r),t=f.v,x=f.index,d=o(i+1,e,r),u=d.v,c=d.index;if(t&&u&&t===u){r[x].x=i+1,r[x].merged=!0,r[c].merged=!0;for(var y=i-1;y>=0;y--){var m=o(y,e,r).index;m>=0&&(r[m].x=r[m].x<3?r[m].x+1:r[m].x)}r.push({x:i+1,y:e,v:2*t,id:Math.random()}),n=!0}}},v=0;v<4;v++)e(v);return{p:r,changed:n}},moveLeft:function(r){for(var n=!1,e=function(e){for(var v=0,a=function(o){var a=-1;!r.some(function(r,n){var i=r.x===o-1&&r.y===e;return r.x===o&&r.y===e&&(a=n),i&&v++,i})&&a>=0&&(r[a].x=v,n=!0,v++)},i=1;i<4;i++)a(i);for(i=1;i<4;i++){var f=o(i,e,r),t=f.v,x=f.index,d=o(i-1,e,r),u=d.v,c=d.index;if(t&&u&&t===u){r[x].x=i-1,r[x].merged=!0,r[c].merged=!0;for(var y=i;y<=3;y++){var m=o(y,e,r).index;m>=0&&(r[m].x=r[m].x>0?r[m].x-1:r[m].x)}r.push({x:i-1,y:e,v:2*t,id:Math.random()}),n=!0}}},v=0;v<4;v++)e(v);return{p:r,changed:n}},moveDown:function(r){for(var n=!1,e=function(e){for(var v=3,a=function(o){var a=-1;!r.some(function(r,n){var i=r.x===e&&r.y===o+1;return r.x===e&&r.y===o&&(a=n),i&&v--,i})&&a>=0&&(r[a].y=v,n=!0,v--)},i=2;i>=0;i--)a(i);for(i=2;i>=0;i--){var f=o(e,i,r),t=f.v,x=f.index,d=o(e,i+1,r),u=d.v,c=d.index;if(t&&u&&t===u){r[x].y=i+1,r[x].merged=!0,r[c].merged=!0;for(var y=i-1;y>=0;y--){var m=o(e,y,r).index;m>=0&&(r[m].y=r[m].y<3?r[m].y+1:r[m].y)}r.push({x:e,y:i+1,v:2*t,id:Math.random()}),n=!0}}},v=0;v<4;v++)e(v);return{p:r,changed:n}},moveUp:function(r){for(var n=!1,e=function(e){for(var v=0,a=function(o){var a=-1;!r.some(function(r,n){var i=r.x===e&&r.y===o-1;return r.x===e&&r.y===o&&(a=n),i&&v++,i})&&a>=0&&(r[a].y=v,n=!0,v++)},i=1;i<4;i++)a(i);for(i=1;i<4;i++){var f=o(e,i,r),t=f.v,x=f.index,d=o(e,i-1,r),u=d.v,c=d.index;if(t&&u&&t===u){r[x].y=i-1,r[x].merged=!0,r[c].merged=!0;for(var y=i;y<=3;y++){var m=o(e,y,r).index;m>=0&&(r[m].y=r[m].y>0?r[m].y-1:r[m].y)}r.push({x:e,y:i-1,v:2*t,id:Math.random()}),n=!0}}},v=0;v<4;v++)e(v);return{p:r,changed:n}}}}});
//# sourceMappingURL=36.d5674d1f.chunk.js.map