<script setup></script>
<template>
  <footer class="footer">
    <div class="f-arriba">
      <div class="blog-container">
        <img height="50px" width="50px" src="/icon.png" alt="" />
        <div class="blog-text">
          <h3>BlogUndac</h3>
          <span>Negocios Electronicos</span>
        </div>
      </div>
      <p class="text">
        Transformando el conocimiento académico en ensayos academicos sobre los
        negocios electronicos.
      </p>
    </div>
    <div class="f-abajo">
        <p class="abajo-text">© 2025 BlogUndac. Creado con 💚 por el 8vo "A"</p>
        <div class="right">
            <p class="peru">Hecho en Perú</p>
            <p class="actualizado">Siempre Actualizado</p>
        </div>
    </div>
  </footer>
</template>
<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: max-content;
  justify-content: space-between;
  gap: 2rem;
  background-color: #63b3704f;
  padding: 2rem;
  border-radius: 1.5rem 1.5rem 0 0;
  box-shadow: 0 0px 10px 4px #88f79096;
}
.f-arriba {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.blog-container {
  display: flex;
  align-items: center;
  gap: .5rem;
}
.blog-text{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .1rem;
    & h3{
        font-size: 1.4rem;
        color: white;
    }
    & span{
        font-weight: 500;
        color: #88f78f;
    }
}
.text{
    color: #e8ffea;
    text-align: center;
}
.f-abajo{
    width: 100%;
    height: 100%;
    align-items: end;
    padding: 1rem 0;
    padding-top: 3rem;
    justify-content: space-between;
    display: flex;
    gap: 1rem;
    color: #88f78f;
    border-top: 1px solid #68ff7277;
    
}
.abajo-text{
    color: #033306;
    font-weight: 600;
}
.right{
    display: flex;
    gap: 5rem;
    font-weight: 500;
}
.actualizado{
    color: #41e04c;
}
@media(width < 768px){
    .footer{
        padding-bottom: 2rem;
    }
    .f-abajo{
        text-align: center;
        flex-direction: column-reverse;
        gap: 2rem;
        
    }
    
}
</style>
