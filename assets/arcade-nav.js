
(function(){
  if(document.getElementById('arcade-global-nav'))return;
  const nav=document.createElement('nav');
  nav.id='arcade-global-nav';nav.className='arcade-global-nav';nav.setAttribute('aria-label','Navegación de Math Arcade');
  const opciones=[
    ['home','⌂','Inicio'],['search','⌕','Buscar'],['games','🎮','Juegos'],
    ['favorites','★','Favoritos'],['info','⚙','Acerca de']
  ];
  nav.innerHTML=opciones.map(([view,icon,name])=>
    '<a href="../../index.html?view='+view+'" aria-label="'+name+' de Math Arcade">'+
    '<span class="arcade-icon" aria-hidden="true">'+icon+'</span><span class="arcade-label">'+name+'</span></a>'
  ).join('');
  document.body.appendChild(nav);
})();
