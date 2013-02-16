$(document).ready(function() {

  // convert filter type select to dropdown
  $('.admin-filter-container select.filter').each(function() {
    var $select         = $(this),
        $options        = $select.find('option'),
        $dropDown       = $('<ul class="dropdown-menu"/>'),
        $dropdownButton = $('<a class="dropdown-toggle"><span class="caret"></span><span class="text"></span></a>');

    $dropdownButton.find('.text').text($select.find(':selected').text());
    $select.parent().find('label').after($dropdownButton);
    $select.parent().find('label').after($dropDown);

    $options.each(function() {
      var $option = $(this),
          value   = $option.val(),
          label   = $option.text() === '' ? '——————————' : $option.text(),
          $item   = $('<li><a href="#">' + label + '</a></li>');

      $dropDown.append($item);
      $dropDown.find('li:last-child() a').on('click', function(e) {
        e.preventDefault();
        $options.removeAttr('selected');
        $option.attr('selected', 'selected');
        $dropdownButton.find('.text').text($option.text());
        $dropDown.find('a').removeClass('active');
        $(e.currentTarget).addClass('active');
      });
    });

    $dropdownButton.dropdown();

    // hide the select form element
    //$select.css('display', 'none');
  });
});