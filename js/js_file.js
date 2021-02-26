function search(){
  excursion__checkbox = $('#excursion__checkbox').is(':checked');
  sea__checkbox = $('#sea__checkbox').is(':checked');
  active__checkbox = $('#active__checkbox').is(':checked');
  
  $('.searchCountry').detach();
  $('.searchCountryBlock').append('<div class="searchCountry"></div>');
  //console.log(excursion__checkbox);
  if(excursion__checkbox){
    $( ".searchCountry" ).append( '<div class="col-xl-2">');
    $( ".searchCountry" ).append( '<div class="countryALL"><div class="flagblock"><img src="img/greck.jpg" class="flagAll" /></div><div class="nameCountreBlockAll"><div class="nameCountryAll">Греция</div></div></div>' );
    $( ".searchCountry" ).append( '<div class="countryAll"><div class="flagblock"><img src="img/tailand.jpg" class="flagAll" /></div><div class="nameCountreBlockAll"><div class="nameCountryAll">Тайланд</div></div></div>' );
    $( ".searchCountry" ).append( '</div>');

    $( ".searchCountry" ).append( '<div class="col-xl-2">');
    $( ".searchCountry" ).append( '<div class="countryALL"><div class="flagblock"><img src="img/russianFlag.png" class="flagAll" /></div><div class="nameCountreBlockAll"><div class="nameCountryAll">Россия</div></div></div>' );
    $( ".searchCountry" ).append( '<div class="flagblock"><img src="img/egyptFlag.jpg" class="flagAll" /></div><div class="nameCountreBlockAll"><div class="nameCountryAll">Египет</div></div></div>' );
    $( ".searchCountry" ).append( '</div>');

    $( ".searchCountry" ).append( '<div class="col-xl-2">');
    $( ".searchCountry" ).append( '<div class="countryALL"><div class="flagblock"><img src="img/ispan.jpg" class="flagAll" /></div><div class="nameCountreBlockAll"><div class="nameCountryAll">Испания</div></div></div>' );
    $( ".searchCountry" ).append( '<div class="flagblock"><img src="img/italy.png" class="flagAll" /></div><div class="nameCountreBlockAll"><div class="nameCountryAll">Италия</div></div></div>' );
    $( ".searchCountry" ).append( '</div>');
  }
  if(sea__checkbox){
    $( ".searchCountry" ).append( '<div class="col-xl-2">');
    $( ".searchCountry" ).append( '<div class="countryAll"><div class="flagblock"><img src="img/vetnam.jpg" class="flagAll" /></div><div class="nameCountreBlockAll"><div class="nameCountryAll">Вьетнам</div></div></div>' );
    $( ".searchCountry" ).append( '<div class="countryALL"><div class="flagblock"><img src="img/dominicana.jpg" class="flagAll" /></div><div class="nameCountreBlockAll"><div class="nameCountryAll">Доминикана</div></div></div>' );
    $( ".searchCountry" ).append( '</div>');

    $( ".searchCountry" ).append( '<div class="col-xl-2">');
    $( ".searchCountry" ).append( '<div class="countryAll"><div class="flagblock"><img src="img/izrail.png" class="flagAll" /></div><div class="nameCountreBlockAll"><div class="nameCountryAll">Израиль</div></div></div>' );
    $( ".searchCountry" ).append( '<div class="countryAll"><div class="flagblock"><img src="img/maldive.jpg" class="flagAll" /></div><div class="nameCountreBlockAll"><div class="nameCountryAll">Мальдивы</div></div>' );
    $( ".searchCountry" ).append( '</div>');

    $( ".searchCountry" ).append( '<div class="col-xl-2">');
    $( ".searchCountry" ).append( '<div class="countryAll"><div class="flagblock"><img src="img/turkeyFlag.png" class="flagAll" /></div><div class="nameCountreBlockAll"><div class="nameCountryAll">Турция</div></div></div>' );
    $( ".searchCountry" ).append( '</div>');
  }
  if(active__checkbox){
    $( ".searchCountry" ).append( '<div class="col-xl-2">');
    $( ".searchCountry" ).append( '<div class="countryALL"><div class="flagblock"><img src="img/cuba.jpg" class="flagAll" /></div><div class="nameCountreBlockAll"><div class="nameCountryAll">Куба</div></div></div>' );
    $( ".searchCountry" ).append( '<div class="countryALL"><div class="flagblock"><img src="img/india.jpg" class="flagAll" /></div><div class="nameCountreBlockAll"><div class="nameCountryAll">Индия</div></div></div>' );
    $( ".searchCountry" ).append( '</div>');

    $( ".searchCountry" ).append( '<div class="col-xl-2">');
    $( ".searchCountry" ).append( '<div class="flagblock"><img src="img/indonesia.png" class="flagAll" /></div><div class="nameCountreBlockAll"><div class="nameCountryAll">Индонезия</div></div></div>' );
    $( ".searchCountry" ).append( '<div class="countryAll"><div class="flagblock"><img src="img/iordania.jpg" class="flagAll" /></div><div class="nameCountreBlockAll"><div class="nameCountryAll">Иордания</div></div></div>' );
    $( ".searchCountry" ).append( '</div>');
  }
}