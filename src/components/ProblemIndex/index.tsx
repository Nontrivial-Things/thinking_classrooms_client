import { FC } from "react";

import ResultCountLabel from "../ResultCountLabel";
import Tag from "../Tag";
import Button from "../Button";

const ProblemIndex: FC = () => {
  return (
    <>
      <ResultCountLabel count={3}></ResultCountLabel>
      <Tag text="ciągi" isDroppable={true} />
      <Tag text="ciągi" />
      <Button>Zaloguj się</Button>
      <Button disabled>Zaloguj się</Button>
      <Button isPrimary={false}>Zaloguj się</Button>
      <Button isPrimary={false} disabled>
        Zaloguj się
      </Button>
      <Button isPrimary={false} withDownloadIcon>
        Zaloguj się
      </Button>
      <Button isPrimary={false} disabled withDownloadIcon>
        Zaloguj się
      </Button>
    </>
  );
};

export default ProblemIndex;
