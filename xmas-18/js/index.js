console.clear();var Stage=function(){function e(e,t){this.width=0,this.scale=e||1,this.wrappingImages=["img/1.jpg","img/2.jpg","img/3.jpg","img/4.jpg","img/5.jpg","img/6.jpg"],this.letterTextures=[],this.presentTextures=[],this.font=t;for(var i in this.wrappingImages){var a=(new THREE.TextureLoader).load(this.wrappingImages[i]);a.wrapS=THREE.RepeatWrapping,a.wrapT=THREE.RepeatWrapping,a.repeat.set(.5,.5),this.letterTextures.push(a);var s=(new THREE.TextureLoader).load(this.wrappingImages[i]);s.wrapS=THREE.RepeatWrapping,s.wrapT=THREE.RepeatWrapping,s.repeat.set(3,3),this.presentTextures.push(s)}THREE.Cache.enabled=!0,this.container=document.createElement("div"),document.body.appendChild(this.container),this.camera=new THREE.PerspectiveCamera(30,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.set(0,0,0),this.cameraTarget=new THREE.Vector3(0,0,0),this.scene=new THREE.Scene,this.scene.fog=new THREE.Fog(16777215,80*this.scale,150*this.scale),this.dirLight=new THREE.DirectionalLight(16777215,.7),this.dirLight.position.set(10*this.scale,20*this.scale,1*this.scale),this.dirLight.target.position.set(0,0,0),this.dirLight.castShadow=!0,this.dirLight.shadow.camera.near=10*this.scale,this.dirLight.shadow.camera.far=100*this.scale,this.dirLight.shadow.camera.left=-20*this.scale,this.dirLight.shadow.camera.right=20*this.scale,this.dirLight.shadow.camera.top=55*this.scale,this.dirLight.shadow.camera.bottom=-10*this.scale,this.scene.add(this.dirLight),this.scene.add(this.dirLight.target),this.pointLight=new THREE.PointLight(16777215,.7),this.scene.add(new THREE.AmbientLight(16777215,.3)),this.group=new THREE.Group,this.group.position.y=100,this.scene.add(this.group),this.plane=new THREE.Mesh(new THREE.PlaneBufferGeometry(1e3*this.scale,1e3*this.scale),new THREE.MeshLambertMaterial({color:16777215,opacity:1,transparent:!1})),this.plane.receiveShadow=!0,this.scene.add(this.plane);new THREE.Vector3(1,0,0).normalize(),this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMapSoft=!1,this.container.appendChild(this.renderer.domElement),this.onResize(),this.moveCamera(0)}return e.prototype.setPlane=function(e){this.plane.position.copy(e.position),this.plane.quaternion.copy(e.quaternion)},e.prototype.moveCamera=function(e){TweenMax.to(this.camera.position,2,{x:e*this.scale,z:60*this.scale,y:60*this.scale}),TweenMax.to(this.cameraTarget,2,{x:e*this.scale}),TweenMax.to(this.pointLight.position,2,{x:e*this.scale}),TweenMax.to(this.dirLight.position,2,{x:e*this.scale}),TweenMax.to(this.dirLight.target.position,2,{x:e*this.scale}),TweenMax.to(this.plane.position,2,{x:e*this.scale})},e.prototype.render=function(){this.camera.lookAt(this.cameraTarget),this.renderer.clear(),this.renderer.render(this.scene,this.camera)},e.prototype.onResize=function(){this.camera.aspect=window.innerWidth/window.innerHeight*1.2,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight/1.2);var e=this.camera.fov*Math.PI/180,t=2*Math.tan(e/2)*this.camera.position.z,i=window.innerWidth/window.innerHeight;this.width=t*i},e.prototype.createPresent=function(e,t,i){var a=new THREE.BoxGeometry(e*this.scale,t*this.scale,i*this.scale),s=this.presentTextures[Math.floor(Math.random()*this.presentTextures.length)],n=new THREE.MeshToonMaterial({color:16777215,wireframe:!1,map:s}),o=new THREE.Mesh(a,n);return o.castShadow=!0,this.scene.add(o),o},e.prototype.createLetter=function(e){var t=this.letterTextures[Math.floor(Math.random()*this.letterTextures.length)],i=new THREE.MeshToonMaterial({color:16777215,wireframe:!1,map:t}),a=new THREE.TextGeometry(e,{font:this.font,size:6*this.scale,height:1.5*this.scale,curveSegments:3,bevelThickness:0,bevelSize:0,bevelEnabled:!1,material:0,extrudeMaterial:1});a.computeBoundingBox(),a.computeVertexNormals();var s=-.5*(a.boundingBox.max.x-a.boundingBox.min.x),n=.5*(a.boundingBox.max.y-a.boundingBox.min.y),o=new THREE.Mesh(a,i);o.position.x=s,o.position.y=-1*this.scale,o.position.z=n,o.rotation.x=-Math.PI/2,o.castShadow=!0;var r=new THREE.Group;return r.add(o),this.scene.add(r),r},e}(),Physics=function(){function e(e){void 0===e&&(e=5),this.scale=5,this.scale=e,this.world=new CANNON.World,this.world.gravity.set(0,-40*this.scale,0),this.world.broadphase=new CANNON.NaiveBroadphase,this.world.solver.iterations=10,this.groundBody=new CANNON.Body({mass:0});var t=new CANNON.Plane;this.groundBody.addShape(t);var i=new CANNON.Vec3(1,0,0);this.groundBody.quaternion.setFromAxisAngle(i,-Math.PI/2),this.world.addBody(this.groundBody);var a=new CANNON.Material("groundMaterial"),s=new CANNON.ContactMaterial(a,a,{friction:1,restitution:.3,contactEquationStiffness:1e8,contactEquationRelaxation:3,frictionEquationStiffness:1e8,frictionEquationRegularizationTime:3});this.world.addContactMaterial(s),this.world.defaultContactMaterial.contactEquationStiffness=1e8,this.world.defaultContactMaterial.contactEquationRelaxation=10}return e.prototype.createPhysics=function(e,t,i,a,s,n,o){void 0===a&&(a=2),void 0===s&&(s=2),void 0===n&&(n=2),void 0===o&&(o=1);var r=new CANNON.Box(new CANNON.Vec3(a*this.scale,s*this.scale,n*this.scale)),h=new CANNON.Body({mass:1*this.scale,position:new CANNON.Vec3(e*this.scale,t*this.scale,i*this.scale)});return h.addShape(r),h.velocity.set(0,-80*this.scale,0),h.angularVelocity.set((Math.random()*o-o/2)*this.scale,(Math.random()*o-o/2)*this.scale,Math.random()*o-o/2),this.scale,h.angularDamping=.8,this.world.addBody(h),h},e.prototype.jump=function(e,t){e.angularVelocity.set((3*Math.random()-1.5)*this.scale,(3*Math.random()-1.5)*this.scale,(3*Math.random()-1.5)*this.scale),e.velocity.set(0,t*this.scale,0)},e.prototype.remove=function(e){this.world.remove(e)},e.prototype.tick=function(){this.world.step(1/60)},e}();function init(e){var t=window.stage=new Stage(5,e),i=new Physics(5);t.setPlane(i.groundBody),window.addEventListener("resize",function(){t.onResize()},!1);var a=[],s=0,n=[],o=(e=e,null),r=!1;function h(e){var h=6*++s;if(t.moveCamera(h)," "!=e){r=!0;for(var c={letter:t.createLetter(e),physics:i.createPhysics(h,50,0,2,1,2,1)},d=0;d<Math.ceil(6*Math.random());d++){var l=1+Math.ceil(2*Math.random()),p=1+Math.ceil(2*Math.random()),w=1+Math.ceil(2*Math.random()),u={present:t.createPresent(l,p,w),physics:i.createPhysics(h,60+5*d,20*Math.random()-10,l/2,p/2,w/2,6)};n.push(u)}a.push(c);for(;a.length>15;){var m=a.shift();i.remove(m.physics)}for(;n.length>45;){var g=n.shift();i.remove(g.physics)}o&&clearTimeout(o),o=setTimeout(function(){r=!1},5e3)}}c();function c(){requestAnimationFrame(c),r&&i.tick();for(var e in a)a[e].letter.position.copy(a[e].physics.position),a[e].letter.quaternion.copy(a[e].physics.quaternion);for(var e in n)n[e].present.position.copy(n[e].physics.position),n[e].present.quaternion.copy(n[e].physics.quaternion);t.render()}var d="MERRY CHRISTMAS!",l=window.autoTypeSpeed=200;setTimeout(p,l);function p(){d.length>0?(h(d.substring(0,1)),d=d.substring(1),setTimeout(p,l)):setTimeout(function(){l=500,t.moveCamera(50),window.focus()},500)}}function loadFont(){(new THREE.FontLoader).load("https://threejs.org/examples/fonts/helvetiker_bold.typeface.json",function(e){init(e)})}loadFont();