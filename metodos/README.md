# Métodos

Todos os métodos do SDBJ serão listados aqui... porém, antes de uso. Algo importante para falar:

**Quando você usa um método... O SDBJ retorna outros métodos para uso.**

Exemplo:

```text
db.get('object')
/*
retorna:
{
    this: object,
    get: function,
    has: function,
    set: function,
    remove: function,
    all: object
}
cada função tem um retorno diferente... use cada uma delas e descubra.
*/

```

