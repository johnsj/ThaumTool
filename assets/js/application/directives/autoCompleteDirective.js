var thaumApp = thaumApp || {};

thaumApp.directive('aspectAutoComplete', function (aspectAutoCompleteDataService, aspectAutoCompleteHelpers) {
  return {
    link: function(scope, elem, attr, ctrl){
      $(elem).bind( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).data( "ui-autocomplete" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            aspectAutoCompleteDataService.getSource(), aspectAutoCompleteHelpers.autoExtractLast( request.term ) ) );
        },
        focus: function() {
          // prevent value inserted on focus
          return false;
        },
        select: function( event, ui ) {
          var terms = aspectAutoCompleteHelpers.autoSplit( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          //terms.push( "" );
          scope.newResearchItem.aspects = terms;
          scope.$digest();
          this.value = terms.join( ", " );
          return false;
        }
      })
    }
  };
})