interface Liberium{cloak(url?:string):void;blob(url:string):Window|null;copen(id:string):void;urlParam:string;url(param?:string):string;gopen(file:string,gameId:string):void;redirect(url:string):void;tabcloak(title?:string,faviconurl?:string):void;g404(key:string):void;getapi(url:string):void}const Liberium:Liberium={cloak(url){const win=window.open(),f=win?.document.createElement("iframe");window.focus();if(!url)return;f!.style.width="100%",f!.style.height="100%",win?.document.body.appendChild(f!),f!.src=url,win?.document.body.style.margin="0",f!.style.border="none",f!.style.margin="0",win?.document.body.style.height="100vh"},blob(url){const page=new Blob([`<iframe style="height:100%; width: 100%; border: none; position: fixed; top: 0; right: 0; left: 0; bottom: 0; border: none" sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts allow-top-navigation allow-top-navigation-by-user-activation" src="${url.startsWith("https://")?url:"https://"+url}"></iframe>`],{type:"text/html"});return window.open(URL.createObjectURL(page))},copen(id){const url=`https://raw.githack.com/3kh0/3kh0-Assets/main/${id}/index.html`;this.cloak(url)},urlParam:"",url(param){if(param){this.urlParam=param}else{return this.urlParam}return""},gopen(file,gameId){const param=this.urlParam,url=new URL(file,window.location.origin);url.searchParams.append(param,gameId),window.location.href=url.href},redirect(url){window.location.href=url},tabcloak(title,faviconurl){if(title){document.title=title}if(faviconurl){const favicon=document.querySelector("link[rel='icon']")||document.createElement("link");favicon.type="image/x-icon",favicon.rel="icon",favicon.href=faviconurl,document.head.appendChild(favicon)}},g404(key){const overlayDiv=document.createElement("div");overlayDiv.style.position="fixed",overlayDiv.style.top="50%",overlayDiv.style.left="0",overlayDiv.style.width="100%",overlayDiv.style.transform="translateY(-50%)",overlayDiv.style.background="#fff",overlayDiv.style.zIndex="9999999";const overlayContent=`<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="initial-scale=1, minimum-scale=1, width=device-width"><title>Error 404 (Not Found)!!</title><style>body{font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;}</style></head><body><h1>Error 404 (Not Found)!!</h1><p>The url <b>${key}</b> you are looking for is not available.</p></body></html>`;overlayDiv.innerHTML=overlayContent,document.body.appendChild(overlayDiv)},getapi(url){fetch(url).then(response=>response.json()).then(data=>console.log(data)).catch(error=>console.error(error))}};export default Liberium;