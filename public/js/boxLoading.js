/*    loding   */

  var boxLoading = function (config){
    this.id = config.id?config.id:'#box_loading';
    this.height = config.height?config.height:'100px';
    this.width = config.width?config.width:'100px';

    this.open = function (){
      $(this.id).css('display', 'block');
    };
    this.close = function (){
      $(this.id).css('display', 'none');
    };
  };
  window.boxLoading = boxLoading;
