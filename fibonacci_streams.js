// streams are a super way to do lazy evalulation, and fibs are a second-order recurrence system
// they work together nicely!
function fib(last,current,count) {
  if(count == 0) return [last,function() { return fib(last,current,1) }];
  return fib(current,last + current,count - 1)
}
function streamN(stream,n) {
  if(n == 0) return stream;
  return streamN(stream[1](),n - 1)
}
function mapStream(stream,n,values) {
  if(n == 0) return [values, stream]
  if(!values) values = []
  var res = stream[1](),
      val = res[0];
  values.push(res[0])
  return mapStream(res,n - 1,values)
}


var result = fib(0,1,10),
    value = result[0],
    stream = result[1];
    
var fibStream = fib(0,1,0),
    tenthFib = streamN(fibStream,10)
    mapped = mapStream(fibStream,100)
