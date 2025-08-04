window.functions['#'] = {
  name: '#',
  englishName: 'index',
  color: 'black',
  infix: true,
  typeSignature: '[a] -> a -> a',
  isValidApplication: function(arguments) {
    // TODO paramaterize list time
    return arguments.length === 2 &&
           arguments[0].type === 'list' &&
           arguments[1] === "int";
  },
  astToString: function(arguments) {
   return "#";
  },
  patterns: [
    {
      definitionLine: null,
      doesMatch: function(arguments){
        return true;
      },
      apply: function(arguments){
        

        return {
          id: uuid.v4(),
          type: 'int',
          items: arguments[0][arguments[1]]
        };
      }
    }
  ]
};