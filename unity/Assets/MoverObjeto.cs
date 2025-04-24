using UnityEngine;

public class MoverObjeto : MonoBehaviour
{
    public float factorRotacion = 90f;     // grados por segundo
    public float factorEscalado = 0.5f;     // amplitud del escalado
    public float movimientoAmplitud = 2f; // cuánto se mueve en X
    public float movimientoVelocidad = 1f;

    private Vector3 posicionInicial;

    void Start()
    {
        posicionInicial = transform.position; // guarda la posición inicial
    }

    void Update()
    {
        // Rotación constante
        transform.Rotate(0f, factorRotacion * Time.deltaTime, 0f);

        // Escalado oscilante con Mathf.Sin
        float escala = 1f + Mathf.Sin(Time.time) * factorEscalado;
        transform.localScale = new Vector3(escala, escala, escala);

        // Traslación oscilante en eje X (de un lado a otro)
        float desplazamientoX = Mathf.Sin(Time.time * movimientoVelocidad) * movimientoAmplitud;
        transform.position = new Vector3(posicionInicial.x + desplazamientoX, posicionInicial.y, posicionInicial.z);
    }
}
