input.onGesture(Gesture.LogoUp, function () {
    record.startRecording(record.BlockingState.Blocking)
    record.playAudio(record.BlockingState.Nonblocking)
})
basic.forever(function () {
	
})
