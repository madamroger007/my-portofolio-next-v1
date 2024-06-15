
import { Cursor } from "@/components/elemen/Cursor";
import { useTypewriter } from "@/hooks/useTypewriter";
interface Props {
  word: string[];
  className?:string
}
const TypewriterHook = ({ word ,className}: Props) => {
  const [text, flags] = useTypewriter({
    words: word,
    loop: 2,
    // typeSpeed: 20,
    onLoopDone: () => console.log("done from typewriter hook"),
  });

  const { isDelete, isType, isDelay, isDone } = flags;

  return (
    <div>
      <span className={className}>
        {text}
      </span>
      <Cursor />

      {isType && (
        <div>
          <em>mengetik..</em>
        </div>
      )}
      {isDelay && (
        <div>
          <em>menunggu..</em>
        </div>
      )}
      {isDelete && (
        <div>
          <em>menghapus..</em>
        </div>
      )}
      {isDone && (
        <div>
          <em>terimakasih!</em>
        </div>
      )}
    </div>
  );
};
export default TypewriterHook;