webpackJsonp([12],{145:function(r,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=[[0,1],[0,-1],[-1,0],[1,0],[-1,-1],[-1,1],[1,-1],[1,1]],n=0,a=1,i=2,t=function(r){var e=r.x,c=r.y,o=r.checkerboard,t=r.player,u=r.direction,f=u[0],d=u[1],l=0,y=t?a:i;for(e+=f,c+=d;e>=0&&e<=7&&c>=0&&c<=7&&o[e][c]!==n&&2!==l;){if(o[e][c]===y)l++,y=t?i:a;else if(1!==l)break;e+=f,c+=d}return 2===l};e.default={couldClick:function(r){var e=r.x,c=r.y,n=r.checkerboard,a=r.player;return o.some(function(r){return t({x:e,y:c,checkerboard:n,player:a,direction:r})})},clickToCover:function(r){var e=r.x,c=r.y,u=r.checkerboard,f=r.player,d=[];return o.forEach(function(r){var o=r[0],l=r[1],y=e,k=c;if(y+=o,k+=l,t({x:e,y:c,checkerboard:u,player:f,direction:r}))for(;y>=0&&y<=7&&k>=0&&k<=7&&u[y][k]!==n&&u[y][k]!==(f?i:a);)u[y][k]=f?i:a,d.push({x:y,y:k}),y+=o,k+=l}),{c:u,r:d}}}}});
//# sourceMappingURL=12.52849c9f.chunk.js.map