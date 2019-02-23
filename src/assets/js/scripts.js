var sdegree = 0

var doc = document
if (doc.addEventListener) {
  doc.addEventListener('mousewheel', MouseWheelHandler, false)
  doc.addEventListener('DOMMouseScroll', MouseWheelHandler, false)
} else {
  doc.attachEvent('onmousewheel', MouseWheelHandler)
}

function MouseWheelHandler (e) {
  var delta = 0
  if (typeof window.orientation !== 'undefined') {
    delta = e
  } else {
    e = window.event || e
    delta = Math.max(-1, Math.min(1, (-e.wheelDelta || -e.detail)))
  }
  console.log('delta', delta)

  sdegree += 0.5 * delta

  var o = animateText(sdegree)

  $('.crawl').not('.animate').css({
    'top': o.top + $(window).height() + 'px',
    'transform': 'rotateX(' + o.rotateX + 'deg) translateZ(' + o.translateZ + 'px)'
  })

  return false
}

function animateText (step) {

  var limit = {'min': 0, 'max': 100}

  var top_l = {'min': 0, 'max': -6000}
  var rotateX_l = {'min': 20, 'max': 25}
  var translateZ_l = {'min': 0, 'max': -2500}

  //
  var m_top = (top_l.max - top_l.min) / (limit.max - limit.min)
  var m_rotateX = (rotateX_l.max - rotateX_l.min) / (limit.max - limit.min)
  var m_translateZ = (translateZ_l.max - translateZ_l.min) / (limit.max - limit.min)

  var top = m_top * step + top_l.min
  var rotateX = m_rotateX * step + rotateX_l.min
  var translateZ = m_translateZ * step + translateZ_l.min

  var output = {
    'top': top,
    'rotateX': rotateX,
    'translateZ': translateZ
  }
  return output
}

$(window).on('touchstart', function (e) {
  var startingY = e.originalEvent.touches[0].pageY

  $(window).on('touchmove', function (e) {
    currentY = e.originalEvent.touches[0].pageY
    var delta = currentY > startingY ? -1 : 1
    console.log('currentY', startingY, currentY)
    MouseWheelHandler(delta)
  })
})

/*
$(window).on('touchmove', function (e) {

  MouseWheelHandler(e.originalEvent.touches[0])
  console.log('touch', e)
  console.log('touch', e.originalEvent.touches[0])
})*/
