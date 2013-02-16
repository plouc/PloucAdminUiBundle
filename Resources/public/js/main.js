$(document).ready(function() {

  function closeDropdowns() {
    $('.dropdown-menu').css('display', 'none');
  }

  $('html').on('click', function () {
    closeDropdowns();
  });

  // convert filter type select to dropdown
  $('.admin-filter-container select.filter').each(function() {
    var $select          = $(this),
        $options         = $select.find('option'),
        $dropDown        = $('<ul class="dropdown-menu"/>'),
        $filterTypeLabel = $('<span class="admin-filter-type-label"></span>'),
        $dropdownButton  = $('<a class="dropdown-toggle"><span class="caret"></span></a>');

    $filterTypeLabel.text($select.find(':selected').text());
    $select.parent().find('label').after($filterTypeLabel);
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
        $filterTypeLabel.text($option.text());
        $dropDown.find('a').removeClass('selected');
        $(e.currentTarget).addClass('selected');
      });
    });

    $dropdownButton.on('click', function(e) {
      e.stopPropagation();
      $dropDown.css('display', 'block');
    });

    // hide the select form element
    $select.css('display', 'none');
  });
});