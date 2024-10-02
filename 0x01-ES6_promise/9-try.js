export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction();
    queue.push(result);
  } catch (e) {
    queue.push(String(e));
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
