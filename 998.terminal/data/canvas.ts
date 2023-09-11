var box = cpy.blessed.box({
    parent: cpy.screen,
    left: 'center',
    top: 'center',
    bg: 'yellow',
    width: '108',
    height: '280'
  });

  
  //var val = 500 * 9 / 60
  //box.setContent( val + 'k' );

  //cpy.screen.append(box) //must append before setting data

  var canvas = cpy.contrib.canvas( {
    left: 'center',
    top: 'center',
    bg: 'yellow',
    width: '720',
    height: '720'
  });

  cpy.screen.append( canvas )
  
  var ctx;
  if (canvas.ctx) ctx = canvas.ctx;

  ctx.strokeStyle=[255,0,0];

  

  //ctx.font = '60pt Calibri';
  //ctx.fillStyle = 'red';   
  //ctx.fillText("A>A>A>D>S", 15, 54)

  var hmm = new Bezier(100,25 , 10,90 , 110,100 , 150,195);
  var LUT = hmm.getLUT(22);

  
  ctx.beginPath();
  ctx.moveTo(0, 0);

  LUT.forEach( (a) =>{
    
    ctx
    
    ctx.lineTo( a.x, a.y);

    //ctx.fillRect( a.x, a.y, 1, 1 );
  } )

  ctx.moveTo(110, 0);

  LUT.forEach( (a) =>{
    ctx
    ctx.lineTo( a.x + 40, a.y);

    //ctx.fillRect( a.x, a.y, 1, 1 );
  } )

  ctx.moveTo(150, 0);

  LUT.forEach( (a) =>{
    ctx
    ctx.lineTo( a.x + 90, a.y);

    //ctx.fillRect( a.x, a.y, 1, 1 );
  } )



  ctx.stroke();


  cpy.screen.key(['escape', 'q', 'C-c'], function (ch, key) {
    return process.exit(0);
  });

  cpy.screen.render()

