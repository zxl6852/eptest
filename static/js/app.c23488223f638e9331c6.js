webpackJsonp([1],{"4JcT":function(e,n){},"7OxZ":function(e,n){},NHnr:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:true});var r=i("7+uW");var t={name:"App"};var a=function(){var e=this;var n=e.$createElement;var i=e._self._c||n;return i("div",{attrs:{id:"app"}},[i("router-view")],1)};var d=[];var o={render:a,staticRenderFns:d};var p=o;function l(e){i("7OxZ")}var c=i("VU/8");var s=false;var h=l;var u=null;var f=null;var m=c(t,p,s,h,u,f);var x=m.exports;var g=i("/ocq");var y=i("k9Ku");var v=i.n(y);var _=i("OAk9");var w=_["b"];var b=_["e"].shared;var B=_["h"];var S=_["l"].TextureCache;var W=_["f"];var k=_["g"];var E=_["d"];var C=_["c"];var T=_["j"];var A=_["a"];var I=_["k"];var O={s:{}};var z={app:undefined,picDungeon:undefined,picStart:undefined,picEscapeProject:undefined,picDemonEye:undefined,sounds:[],soundSprite:undefined,id:undefined,id2:undefined,id3:undefined,sheet:undefined};var P={picDeath:undefined,picBtnAgain:undefined,picBtnAgain2:undefined,picBtnEnd:undefined,picBtnEnd2:undefined,picEnd:undefined,style:undefined};var D={picWin1:undefined,picWin1_1:undefined,picWin1_2:undefined,picWin1_3:undefined,picWin1_4:undefined,picWin2:undefined,picWin2_1:undefined,picWin2_2:undefined,picWin2_3:undefined,picWin2_4:undefined,picSnow:undefined,snowArr:[],picLadder:undefined,spd1_lf:undefined};var j={gameScene:undefined,gamel1Scene:undefined,gamel2Scene:undefined,gamel3Scene:undefined,gameOpenScene:undefined,gameOverScene:undefined,gameWinScene:undefined,chr:1,enemyhX:undefined,enemyhY:undefined,enemyhW:undefined,enemyhH:undefined,enemyhB:undefined,enemyArr:undefined,dungeon:undefined,explorer:undefined,treasure:undefined,state:undefined,blob:undefined,x:undefined,y:undefined,blobArr:[],blobArr2:[],blobArr3:[],note:undefined,noteText:undefined,animals:undefined,roundBoxl:undefined,roundBox:undefined,PIXIText:undefined,stras:undefined,status:undefined,roundBoxW:undefined,chimes:undefined,exit:undefined,player:undefined,door:undefined,door2:undefined,healthBar:undefined,blood:undefined,getKey:0,getKeyT:undefined,key:undefined,time:undefined,dm:undefined,explorerHit:false,taketreasure:undefined,startcheck:undefined,enemies:undefined,clearTime:undefined,stra:0,hitdemage:15,numberOfBlobs:6,spacing:48,xOffset:150,speed:2,direction:1,howblob:"",keyUp:0,keyDown:0,keyLeft:0,keyRight:0,checklevel:1,wlContainer:undefined,chrContainer:undefined,dvlContainer:undefined,l2EnCon:undefined,l3EnCon:undefined,wlbefore:0,wlafter:0,wlx:200,wly:200,wlvx:15,wlvy:15,wlsp:.1,man1_fr:undefined,man1_bk:undefined,man1_lf:undefined,man1_rt:undefined,chr1_bk:undefined,chr1_fr:undefined,dvl1_lf:undefined,dvl1_rt:undefined,zph1_lf:undefined,zph1_rt:undefined};var M="${pageContext.request.contextPath}../../static/images/";var H="${pageContext.request.contextPath}../../static/musics/";var K="${pageContext.request.contextPath}../../static/resources/";var X=[H+"level1.mp3",H+"level3.mp3",H+"gettreasure.mp3",H+"opendoor.mp3",H+"death.mp3",H+"success.wav",H+"openmusic.wav",H+"startclick.wav",H+"lose.mp3",H+"win.mp3",H+"level2.mp3",H+"sprite.mp3",H+"snowstorm.mp3"];var L={loop1:K+"loops/loop1.mp3",loop2:K+"loops/loop2.mp3",loop3:K+"loops/loop3.mp3",loop4:K+"loops/loop4.mp3",bird:K+"bird.mp3",boing:K+"boing.mp3",buzzer:K+"buzzer.mp3",car:K+"car.mp3",chime:K+"chime.mp3",success:K+"success.mp3",sword:K+"sword.mp3",whistle:K+"whistle.mp3"};var F={"alien death":{start:1,end:2},"boss hit":{start:3,end:3.5},escape:{start:4,end:7.2},meow:{start:8,end:8.5},numkey:{start:9,end:9.1},ping:{start:10,end:11},death:{start:12,end:16.2},shot:{start:17,end:18},squit:{start:19,end:19.3}};function R(){z.id=b.resources[M+"treasureHunter.json"].textures;z.id2=b.resources[M+"gameswl.json"].textures;z.id3=b.resources[M+"gameing.json"].textures;z.sheet=b.resources[M+"gameing.json"].spritesheet;z.picDungeon=new B(z.id2["Dungeon.png"]);z.picStart=new B(z.id2["start.png"]);z.picEscapeProject=new B(z.id2["escapeProject.png"]);z.picDemonEye=new B(z.id2["demonEye.png"]);P.picDeath=new B(z.id2["YouDeath.png"]);P.picBtnAgain=new B(z.id2["againButton1.png"]);P.picBtnAgain2=new B(z.id2["againButton2.png"]);P.picBtnEnd=new B(z.id2["endButton1.png"]);P.picBtnEnd2=new B(z.id2["endButton2.png"]);P.picEnd=new B(z.id2["JWDLx5AZBtI.jpg"]);j.dungeon=new B(z.id["dungeon.png"]);j.treasure=new B(z.id3["key.png"]);j.door=new B(z.id["door.png"]);j.door2=new B(z.id3["door2.png"]);j.explorer=new B(z.id["explorer.png"]);j.note=new B(z.id3["Paper.png"]);D.picWin1=new B(z.id2["end1.jpg"]);D.picWin1_1=new B(z.id2["end1-1.png"]);D.picWin1_2=new B(z.id2["end1-2.png"]);D.picWin1_3=new B(z.id2["end1-3.png"]);D.picWin1_4=new B(z.id2["end1-4.png"]);D.picWin2=new B(z.id2["end2.jpg"]);D.picWin2_1=new B(z.id2["end2-1.png"]);D.picWin2_2=new B(z.id2["end2-2.png"]);D.picWin2_3=new B(z.id2["end2-3.png"]);D.picWin2_4=new B(z.id2["end2-4.png"]);D.picLadder=new B(z.id3["ladder.png"]);D.spd1_lf=new A(z.sheet.animations["spd1_lf"]);U();$();J();Z();Q();j.state=ne;z.app.ticker.add(function(e){return ee(e)});z.sounds[6].play()}function Y(){j.gameScene.visible=false;j.gameOpenScene.visible=false;j.gameOverScene.visible=false;j.gameWinScene.visible=false}function q(e,n,i,r,t,a,d){e.scale.x=n;e.scale.y=i;e.anchor.set(r,t);e.x=a;e.y=d}function N(e,n){var i={};n.forEach(function(n){i[n.key]=new B([e][n.value])});return i}function U(){j.gameOpenScene=new C;z.app.stage.addChild(j.gameOpenScene);q(z.picDungeon,2,2,.5,.5,z.app.renderer.width/2+15,z.app.renderer.height/2);j.gameOpenScene.addChild(z.picDungeon);q(z.picDemonEye,.2,.2,.5,.5,z.app.renderer.width/2,z.app.renderer.height/2);j.gameOpenScene.addChild(z.picDemonEye);q(z.picEscapeProject,1,1,.5,.5,z.app.renderer.width/2,z.app.renderer.height/2);j.gameOpenScene.addChild(z.picEscapeProject);q(z.picStart,.3,.3,.5,.5,z.app.renderer.width/2,z.app.renderer.height/2+150,z.picStart.interactive=true,z.picStart.buttonMode=true,z.picStart.on("click",ie));j.gameOpenScene.addChild(z.picStart)}function $(){j.gameScene=new C;z.app.stage.addChild(j.gameScene);j.healthBar=new C;j.healthBar.position.set(z.app.renderer.width-160,80);j.gameScene.addChild(j.healthBar);j.roundBoxl=new E;j.roundBoxl.lineStyle(4,10079487,2);j.roundBoxl.beginFill(0);j.roundBoxl.drawRoundedRect(0,0,150,25,10);j.roundBoxl.endFill();j.healthBar.addChild(j.roundBoxl);j.roundBox=new E;j.roundBoxW=145;j.roundBox.beginFill(16750899);j.roundBox.drawRoundedRect(3,3,j.roundBoxW,20,10);j.roundBox.endFill();j.healthBar.addChild(j.roundBox);j.healthBar.outer=j.roundBox;j.blood=j.healthBar.outer.width/j.roundBoxW*100;j.PIXIText=new _["i"](j.blood+"%");j.PIXIText.style={fill:"white",font:"16px PetMe64"};j.PIXIText.x=j.healthBar.x-80;j.PIXIText.y=j.healthBar.y-3;j.gameScene.addChild(j.PIXIText);j.healthBar.blood=j.PIXIText;j.stras=new _["i"](j.stra);j.stras.style={fill:"white",font:"16px PetMe64"};j.stras.x=j.healthBar.x-150;j.stras.y=j.healthBar.y-3;j.stras.visible=false;j.gameScene.addChild(j.stras);j.healthBar.sdf=j.stras;j.getKeyT=new _["i"](j.getKey+"/3");j.getKeyT.style={fill:"white",font:"16px PetMe64"};j.getKeyT.x=j.healthBar.x-170;j.getKeyT.y=j.healthBar.y-3;j.gameScene.addChild(j.getKeyT);j.healthBar.key=j.getKeyT;j.key=new B(z.id3["key.png"]);j.key.x=j.healthBar.x-180;j.key.y=j.healthBar.y-3;j.gameScene.addChild(j.key);j.status=new _["i"]("");j.status.style={fill:"white",font:"16px PetMe64"};j.status.x=10;j.status.y=j.healthBar.y-3;j.gameScene.addChild(j.status);j.gameScene.status=j.status;j.noteText=new _["i"]("");j.noteText.style={fill:"white",font:"10px PetMe64"};j.noteText.x=16;j.noteText.y=z.app.renderer.height-120;j.gameScene.addChild(j.noteText);j.healthBar.noteText=j.noteText;q(j.dungeon,1,1,.5,.5,z.app.renderer.width/2,z.app.renderer.height/2);j.gameScene.addChild(j.dungeon)}function J(){j.gamel1Scene=new C;j.gameScene.addChild(j.gamel1Scene);q(j.note,.05,.05,.5,.5,50,550);j.gamel1Scene.addChild(j.note);q(j.treasure,1,1,.5,.5,j.dungeon.width/2+200,de(150,580));j.gameScene.addChild(j.treasure);j.door.x=68;j.door.y=135;j.door.anchor.set(.5,.5);j.gameScene.addChild(j.door);j.explorer.vx=j.wlvx;j.explorer.vy=j.wlvy;j.explorer.x=j.door.x;j.explorer.y=j.door.y+20;j.gameScene.addChild(j.explorer);for(var e=0;e<j.numberOfBlobs;e++){j.blob=new B(z.id["blob.png"]);j.x=j.spacing*e+j.xOffset;j.y=de(135,570);j.blob.x=j.x;j.blob.y=j.y;j.blob.vy=j.speed*j.direction;j.direction*=-1;j.blobArr.push(j.blob);j.gamel1Scene.addChild(j.blob)}}function G(){j.blobArr=[];j.gamel1Scene.visible=false;z.sounds[10].play();z.sounds[10].volume(.3);j.hitdemage=30;j.speed=4;j.gamel2Scene=new C;j.gameScene.addChild(j.gamel2Scene);j.explorer.x=j.door.x;j.explorer.y=j.door.y+20;j.treasure.x=60;j.treasure.y=de(150,580);j.door.x=450;j.door.y=135;j.spacing=48;j.xOffset=100;for(var e=0;e<j.numberOfBlobs;e++){j.chr1_bk=new A(z.sheet.animations["chr1_bk"]);j.chr1_fr=new A(z.sheet.animations["chr1_fr"]);j.x=j.spacing*e+j.xOffset;j.y=de(135,570);j.chr1_bk.x=j.x;j.chr1_bk.y=j.y;j.chr1_fr.x=j.chr1_bk.x;j.chr1_fr.y=j.chr1_bk.y;j.chr1_bk.vy=j.speed*j.direction;j.chr1_fr.vy=j.chr1_bk.vy;j.direction*=-1;j.blobArr2.push(j.chr1_bk,j.chr1_fr);j.chr1_bk.animationSpeed=.1;j.chr1_fr.animationSpeed=j.chr1_bk.animationSpeed;j.gamel2Scene.addChild(j.chr1_bk);j.gamel2Scene.addChild(j.chr1_fr);j.chr1_bk.play();j.chr1_fr.play();j.chr1_bk.visible=false;j.chr1_fr.visible=false;if(j.direction===1){j.chr1_fr.visible=true}else j.chr1_bk.visible=true}}function V(){j.blobArr2=[];j.gamel2Scene.visible=false;z.sounds[1].play();z.sounds[1].volume(.3);j.hitdemage=40;j.speed=7;j.gamel3Scene=new C;j.gameScene.addChild(j.gamel3Scene);j.treasure.x=de(30,480);j.treasure.y=170;j.door2.width=110;j.door2.x=17;j.door2.y=550;j.gamel3Scene.addChild(j.door2);j.door.x=20;j.door.y=550;j.explorer.x=j.door.x+20;j.explorer.y=j.door.y-10;j.spacing=80;j.xOffset=100;for(var e=0;e<j.numberOfBlobs;e++){j.zph1_lf=new A(z.sheet.animations["zph1_lf"]);j.zph1_rt=new A(z.sheet.animations["zph1_rt"]);j.x=de(20,480);j.y=j.spacing*e+j.xOffset;j.zph1_lf.x=j.x;j.zph1_lf.y=j.y;j.zph1_rt.x=j.zph1_lf.x;j.zph1_rt.y=j.zph1_lf.y;j.zph1_lf.vx=j.speed*j.direction;j.zph1_rt.vx=j.zph1_lf.vx;j.direction*=-1;j.blobArr3.push(j.zph1_lf,j.zph1_rt);j.zph1_lf.animationSpeed=.1;j.zph1_rt.animationSpeed=j.zph1_lf.animationSpeed;j.gamel3Scene.addChild(j.zph1_lf);j.gamel3Scene.addChild(j.zph1_rt);j.zph1_lf.play();j.zph1_rt.play();j.zph1_lf.visible=false;j.zph1_rt.visible=false;if(j.direction===1){j.zph1_rt.visible=true}else j.zph1_lf.visible=true}}function Z(){j.gameOverScene=new C;z.app.stage.addChild(j.gameOverScene);q(P.picEnd,1,1,.5,.5,z.app.renderer.width/2+100,z.app.renderer.height/2);q(P.picDeath,1,1,.5,.5,z.app.renderer.width/2,z.app.renderer.height/2-100);q(P.picBtnAgain,1,1,.5,.5,z.app.renderer.width/2-100,z.app.renderer.height/2+100,P.picBtnAgain.interactive=true,P.picBtnAgain.buttonMode=true,P.picBtnAgain.on("click",oe));P.picBtnAgain.on("mousedown",function(){P.picBtnAgain.alpha=.5});P.picBtnAgain.on("mouseover",function(){P.picBtnAgain.alpha=.8});P.picBtnAgain.on("mouseout",function(){P.picBtnAgain.alpha=1});q(P.picBtnEnd,1,1,.5,.5,z.app.renderer.width/2+100,z.app.renderer.height/2+100,P.picBtnEnd.interactive=true,P.picBtnEnd.buttonMode=true,P.picBtnEnd.on("click",le));P.picBtnEnd.on("mousedown",function(){P.picBtnEnd.alpha=.5});P.picBtnEnd.on("mouseover",function(){P.picBtnEnd.alpha=.8});P.picBtnEnd.on("mouseout",function(){P.picBtnEnd.alpha=1});j.gameOverScene.addChild(P.picEnd);j.gameOverScene.addChild(P.picDeath);j.gameOverScene.addChild(P.picBtnAgain);j.gameOverScene.addChild(P.picBtnEnd)}function Q(){j.gameWinScene=new C;z.app.stage.addChild(j.gameWinScene);q(D.picWin1,.7,.7,.5,.5,z.app.renderer.width/2,z.app.renderer.height/2);q(D.picWin1_1,.3,.3,0,0,0,z.app.renderer.height/2+20);q(D.picWin1_2,.3,.3,0,0,0,z.app.renderer.height/2+40);q(D.picWin1_3,.3,.3,0,0,4,z.app.renderer.height/2+65);q(D.picWin1_4,.4,.4,0,0,0,z.app.renderer.height/2+80);D.picWin1_1.alpha=0;D.picWin1_2.alpha=0;D.picWin1_3.alpha=0;D.picWin1_4.alpha=0;j.gameWinScene.addChild(D.picWin1);j.gameWinScene.addChild(D.picWin1_1);j.gameWinScene.addChild(D.picWin1_2);j.gameWinScene.addChild(D.picWin1_3);j.gameWinScene.addChild(D.picWin1_4);q(D.picWin2,.7,.7,.5,.5,z.app.renderer.width/2,z.app.renderer.height/2);q(D.picWin2_1,.3,.3,0,0,0,z.app.renderer.height/2+20);q(D.picWin2_2,.3,.3,0,0,0,z.app.renderer.height/2+40);q(D.picWin2_3,.3,.3,0,0,2,z.app.renderer.height/2+60);q(D.picWin2_4,.3,.3,0,0,0,z.app.renderer.height/2+85);D.picWin2_1.alpha=0;D.picWin2_2.alpha=0;D.picWin2_3.alpha=0;D.picWin2_4.alpha=0;j.gameWinScene.addChild(D.picWin2);j.gameWinScene.addChild(D.picWin2_1);j.gameWinScene.addChild(D.picWin2_2);j.gameWinScene.addChild(D.picWin2_3);j.gameWinScene.addChild(D.picWin2_4);q(D.spd1_lf,1.5,1.5,0,0,z.app.renderer.width,z.app.renderer.height-80);D.spd1_lf.animationSpeed=.1;D.spd1_lf.play();j.gameWinScene.addChild(D.spd1_lf);q(D.picLadder,.5,.5,.5,.5,z.app.renderer.width-40,z.app.renderer.height/2+150);j.gameWinScene.addChild(D.picLadder);for(var e=0;e<5;e++){D.picSnow=new B(z.id3["snow.gif"]);switch(e){case 0:q(D.picSnow,10,10,0,0,z.app.renderer.height/2+100,0);break;case 1:q(D.picSnow,5,5,0,0,z.app.renderer.height/2+100,0);break;case 2:q(D.picSnow,4,4,0,0,z.app.renderer.height/2-100,0);break;case 3:q(D.picSnow,3,3,0,0,z.app.renderer.height/2,0);break;case 4:q(D.picSnow,2,2,0,0,z.app.renderer.height/2-300,0);break;default:break}D.snowArr.push(D.picSnow);j.gameWinScene.addChild(D.picSnow)}}function ee(e){j.state(e)}function ne(e){j.gameScene.visible=false;j.gameOverScene.visible=false;j.gameWinScene.visible=false;if(j.startcheck!=1){j.startcheck=1;var n=0;setInterval(function(){if(n===0){z.picStart.alpha-=.05;z.picDemonEye.alpha-=.05;if(z.picStart.alpha<=0)n=1}else{z.picStart.alpha+=.05;z.picDemonEye.alpha+=.05;if(z.picStart.alpha>=1)n=0}},100)}}function ie(){z.picStart.interactive=false;z.sounds[6].stop();z.sounds[7].play();if(j.startcheck===1){z.picDemonEye.alpha=1;j.startcheck=1;var e=0;setInterval(function(){if(e===0){z.picStart.alpha=0;if(z.picStart.alpha<=0)e=1}else{z.picStart.alpha=1;if(z.picStart.alpha>=1)e=0}},150)}setTimeout(function(){j.state=re;j.gameOpenScene.visible=false;j.gameScene.visible=true;z.sounds[0].play();z.sounds[0].volume(.5)},2e3)}function re(e){if(j.dm===2){pe()}j.gameScene.visible=true;z.sounds[7].stop();se(j.explorer,{x:30,y:125,width:480,height:598});if(j.stra>0){j.stra-=1;j.healthBar.sdf.text=j.stra}if(j.chr===1){j.enemyhX=30;j.enemyhY=130;j.enemyhW=480;j.enemyhH=600;j.enemyhB=-1;j.enemyArr=j.blobArr}if(j.chr===2){j.enemyhX=30;j.enemyhY=150;j.enemyhW=480;j.enemyhH=610;j.enemyhB=-1;j.enemyArr=j.blobArr2}if(j.chr===3){j.enemyhX=35;j.enemyhY=150;j.enemyhW=500;j.enemyhH=610;j.enemyhB=-1;j.enemyArr=j.blobArr3}if(ce(j.explorer,j.note)&&j.chr===1){j.healthBar.noteText.text="三把鑰匙代表:[希望、救贖、釋放]\n取得所有鑰匙，否則..."}else{j.healthBar.noteText.text=""}var n="";j.enemyArr.forEach(function(e,i){if(j.chr!=3){e.y+=e.vy}else e.x+=e.vx;var r=se(e,{x:j.enemyhX,y:j.enemyhY,width:j.enemyhW,height:j.enemyhH});if(r==="top"){e.vy*=j.enemyhB;if(j.chr!=1){if(i===0||i===2||i===4||i===6||i===8||i===10){e.visible=false}else{e.visible=true}}}if(r==="bottom"){e.vy*=j.enemyhB;if(j.chr!=1){if(i===0||i===2||i===4||i===6||i===8||i===10){e.visible=true}else{e.visible=false}}}if(r==="left"){e.vx*=j.enemyhB;if(j.chr!=1){if(i===0||i===2||i===4||i===6||i===8||i===10){e.visible=false}else{e.visible=true}}}if(r==="right"){e.vx*=j.enemyhB;if(j.chr!=1){if(i===0||i===2||i===4||i===6||i===8||i===10){e.visible=true}else{e.visible=false}}}if(ce(j.explorer,e)){j.stra=50;n=true}});if(n){z.soundSprite.play("shot");j.time=setTimeout(function(){j.gameScene.status.text=""},500);setTimeout(function(){j.explorer.alpha=.5},0);setTimeout(function(){j.explorer.alpha=1},100);setTimeout(function(){j.explorer.alpha=.5},200);setTimeout(function(){j.explorer.alpha=1},300);setTimeout(function(){j.explorer.alpha=.5},400);setTimeout(function(){j.explorer.alpha=1},500);j.healthBar.outer.width-=j.hitdemage;if(j.healthBar.outer.width<0)j.healthBar.outer.width=0;j.blood=j.healthBar.outer.width/j.roundBoxW*100;j.healthBar.blood.x=j.healthBar.x-80;j.healthBar.blood.y=j.healthBar.y-3;if(j.blood<0)j.blood=0;j.healthBar.blood.x=j.healthBar.x-100;j.healthBar.blood.text=j.blood.toFixed(2)+"%";j.gameScene.status.text="撞傷-"+j.hitdemage}if(ce(j.explorer,j.treasure)){if(j.taketreasure!=1)j.taketreasure=0;if(j.taketreasure===0){j.taketreasure=1;z.sounds[2].on("end",function(){z.sounds[2].stop()});z.sounds[2].play()}j.treasure.x=j.explorer.x+10;j.treasure.y=j.explorer.y+10}if(!ce(j.explorer,j.treasure)){j.taketreasure=0}if(ce(j.treasure,j.door)){j.getKey++;j.healthBar.key.text=j.getKey+"/3"}if(ce(j.explorer,j.door)){setTimeout(function(){j.xlvx=0;j.xlvy=0},2e3);if(j.chr===3){if(j.getKey!=3){j.taketreasure=3}else j.taketreasure=2;z.sounds[1].stop();z.sounds[3].on("end",function(){z.sounds[3].stop()});z.sounds[3].play();setTimeout(function(){z.sounds[12].play();z.sounds[12].volume(.3)},1500);j.state=ae}if(j.chr!=3){z.sounds[0].stop();z.sounds[10].stop();z.sounds[3].on("end",function(){z.sounds[3].stop()});z.sounds[3].play();if(j.chr===1){j.chr=2}else j.chr=3;oe()}}if(j.healthBar.outer.width===0){z.sounds[0].stop();z.sounds[10].stop();z.sounds[1].stop();j.stra=99999;j.explorer.anchor.set(.5,.5);j.wlvx=0;j.wlvy=0;if(j.dm!=1)j.dm=0;if(j.dm===0){z.sounds[4].on("end",function(){z.sounds[4].stop()});z.sounds[4].play();j.dm=1;j.explorer.y+=15;j.explorer.x+=10;j.clearTime=setInterval(function(){if(j.explorer.rotation!=-1.5){j.explorer.rotation-=.3}},200);setTimeout(function(){j.state=te;z.sounds[8].play()},2e3)}}}function te(){j.gameScene.visible=false;j.gameOverScene.visible=true}function ae(){j.gameScene.visible=false;j.gameWinScene.visible=true;D.snowArr.forEach(function(e,n){if(e.x<-500||e.y>1e3){e.x=300;e.y=-100}});if(j.dm!=1)j.dm=0;if(j.dm===0){j.dm=1;setInterval(function(){D.snowArr.forEach(function(e,n){e.x-=40;e.y+=10})},25);setInterval(function(){D.snowArr.forEach(function(e,n){e.x-=40;e.y+=10})},40);P.picBtnEnd.on("mousedown",function(){P.picBtnEnd.alpha=.5});P.picBtnEnd.on("mouseover",function(){P.picBtnEnd.alpha=.8});P.picBtnEnd.on("mouseout",function(){P.picBtnEnd.alpha=1});if(j.taketreasure===2){D.picWin2.visible=false}else D.picWin2.visible=true;j.gameWinScene.addChild(j.explorer);j.explorer.x=z.app.renderer.width-40;j.explorer.y=z.app.renderer.height-40}if(j.explorer.y<=680){if(j.taketreasure===3){j.taketreasure=0;j.wlvx=0;j.wlvy=0;setTimeout(function(){D.spd1_lf.x=460;j.explorer.x=455;j.wlvx=15;setInterval(function(){j.explorer.x-=50;j.explorer.y+=50},100);z.sounds[4].on("end",function(){z.sounds[4].stop()});z.sounds[4].play()},100);setTimeout(function(){D.spd1_lf.stop();setInterval(function(){D.picWin2_1.alpha+=.05},100)},3e3);setTimeout(function(){setInterval(function(){D.picWin2_2.alpha+=.05},100)},6e3);setTimeout(function(){setInterval(function(){D.picWin2_3.alpha+=.05},100)},9e3);setTimeout(function(){setInterval(function(){D.picWin2_4.alpha+=.05},100)},11e3);setTimeout(function(){q(P.picBtnEnd,.7,.7,0,0,0,z.app.renderer.height/2+300,P.picBtnEnd.interactive=true,P.picBtnEnd.buttonMode=true,P.picBtnEnd.on("click",le),P.picBtnEnd.alpha=0);j.gameWinScene.addChild(P.picBtnEnd);setInterval(function(){P.picBtnEnd.alpha+=.05},100)},13e3)}}if(j.explorer.x===457&&j.explorer.y===515){if(j.taketreasure===2){j.taketreasure=0;j.wlvx=0;j.wlvy=0;setTimeout(function(){setInterval(function(){j.explorer.alpha-=.05},100);z.sounds[12].stop();z.sounds[9].on("end",function(){z.sounds[9].stop()});z.sounds[9].play()},2e3);setTimeout(function(){setInterval(function(){D.picWin1_1.alpha+=.05},100)},5e3);setTimeout(function(){setInterval(function(){D.picWin1_2.alpha+=.05},100)},9e3);setTimeout(function(){setInterval(function(){D.picWin1_3.alpha+=.05},100)},13e3);setTimeout(function(){setInterval(function(){D.picWin1_4.alpha+=.05},100)},17e3);setTimeout(function(){q(P.picBtnEnd,.7,.7,0,0,0,z.app.renderer.height/2+300,P.picBtnEnd.interactive=true,P.picBtnEnd.buttonMode=true,P.picBtnEnd.on("click",le),P.picBtnEnd.alpha=0);j.gameWinScene.addChild(P.picBtnEnd);setInterval(function(){P.picBtnEnd.alpha+=.05},100)},21e3)}}if(j.explorer.x>=487)j.explorer.x=487;if(j.explorer.x<=457&&D.spd1_lf.x!=460){j.explorer.x=457}if(j.explorer.y<=515)j.explorer.y=515;if(j.explorer.y>=710&&D.spd1_lf.x!=460){j.explorer.y=710}}function de(e,n){return Math.floor(Math.random()*(n-e+1))+e}function oe(){j.dm=2;j.xlvx=15;j.xlvy=15;j.state=re;P.picBtnAgain.interactive=false}function pe(){j.gameScene.visible=true;j.gameOverScene.visible=false;clearInterval(j.clearTime);if(j.chr===1){z.sounds[0].play()}if(j.chr===2){if(j.healthBar.outer.width===0){z.sounds[10].play()}else{G()}}if(j.chr===3){if(j.healthBar.outer.width===0){z.sounds[1].play()}else{V()}}j.explorer.rotation=0;j.explorer.anchor.set(0,0);if(j.chr!=3){j.explorer.x=j.door.x;j.explorer.y=j.door.y+20}else{j.explorer.x=j.door.x+20;j.explorer.y=j.door.y-10}j.healthBar.outer.width=j.roundBoxW=145;j.blood=j.healthBar.outer.width/j.roundBoxW*100;j.healthBar.blood.text=(j.blood.toFixed(2)|0)+"%";j.healthBar.blood.x=j.healthBar.x-80;j.healthBar.blood.y=j.healthBar.y-3;j.stra=0;j.wlvx=15;j.wlvy=15;j.dm="";P.picBtnAgain.interactive=true;z.sounds[8].stop()}function le(){window.location.reload();P.picBtnEnd.interactive=false}function ce(e,n){var i=e.getBounds();var r=n.getBounds();return j.stra===0&&i.x+i.width>r.x&&i.x<r.x+r.width&&i.y+i.height>r.y&&i.y<r.y+r.height}function se(e,n){var i=undefined;if(e.x<n.x){e.x=n.x;i="left"}if(e.y<n.y){e.y=n.y;i="top"}if(e.x+e.width>n.width){e.x=n.width-e.width;i="right"}if(e.y+e.height>n.height){e.y=n.height-e.height;i="bottom"}return i}function he(){if(j.wlafter===1){j.man1_fr.x=j.man1_bk.x;j.man1_fr.y=j.man1_bk.y;j.man1_lf.x=j.man1_bk.x;j.man1_lf.y=j.man1_bk.y;j.man1_rt.x=j.man1_bk.x;j.man1_rt.y=j.man1_bk.y;j.explorer.x=j.man1_bk.x-8;j.explorer.y=j.man1_bk.y-8}if(j.wlafter===2){j.man1_bk.x=j.man1_fr.x;j.man1_bk.y=j.man1_fr.y;j.man1_lf.x=j.man1_fr.x;j.man1_lf.y=j.man1_fr.y;j.man1_rt.x=j.man1_fr.x;j.man1_rt.y=j.man1_fr.y;j.explorer.x=j.man1_fr.x-8;j.explorer.y=j.man1_fr.y-8}if(j.wlafter===3){j.man1_bk.x=j.man1_lf.x;j.man1_bk.y=j.man1_lf.y;j.man1_fr.x=j.man1_lf.x;j.man1_fr.y=j.man1_lf.y;j.man1_rt.x=j.man1_lf.x;j.man1_rt.y=j.man1_lf.y;j.explorer.x=j.man1_lf.x-8;j.explorer.y=j.man1_lf.y-8}if(j.wlafter===4){j.man1_bk.x=j.man1_rt.x;j.man1_bk.y=j.man1_rt.y;j.man1_fr.x=j.man1_rt.x;j.man1_fr.y=j.man1_rt.y;j.man1_lf.x=j.man1_rt.x;j.man1_lf.y=j.man1_rt.y;j.explorer.x=j.man1_rt.x-8;j.explorer.y=j.man1_rt.y-8}}var ue=document.querySelector("body");ue.addEventListener("keydown",function(e){switch(e.keyCode){case 38:case 87:j.explorer.y-=j.wlvy;break;case 40:case 83:j.explorer.y+=j.wlvy;break;case 37:case 65:j.explorer.x-=j.wlvx;break;case 39:case 68:j.explorer.x+=j.wlvx;break;default:break}});var fe={data:function e(){return{app:undefined,GAME_STATUS:{UNINIT:0,INIT:1,LOADED:2,PLAYING:3,GAME_OVER:4}}},created:function e(){z.app=new w({width:512,height:750,antialias:true,transparent:false,resolution:1,backgroundColor:0});document.body.appendChild(z.app.view);z.sounds=new Array(X.length)},mounted:function e(){b.add(M+"gameswl.json").add(M+"gameing.json").add(M+"treasureHunter.json");X.forEach(function(e,n){z.sounds[n]=new y["Howl"]({src:[e],loop:true})});z.soundSprite=new y["Howl"]({src:[H+"sprite.mp3"],sprite:{shot:[1e3,2e3]}});b.load(R)},methods:{}};var me=function(){var e=this;var n=e.$createElement;var i=e._self._c||n;return i("div")};var xe=[];var ge={render:me,staticRenderFns:xe};var ye=ge;function ve(e){i("4JcT")}var _e=i("VU/8");var we=false;var be=ve;var Be="data-v-059ccb04";var Se=null;var We=_e(fe,ye,we,be,Be,Se);var ke=We.exports;r["a"].use(g["a"]);var Ee=new g["a"]({routes:[{path:"/",name:"HelloWorld",component:ke}]});r["a"].config.productionTip=false;new r["a"]({el:"#app",router:Ee,components:{App:x},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.c23488223f638e9331c6.js.map