import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ExampleResults = () => {
  return (
    <Card className="border-hidden flex flex-col gap-5">
        <Card>
          <CardHeader>
            <CardTitle>example</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-row items-center gap-5">
            <Button>Listen</Button>
            <span>/əɡˈzæmpl̩/</span>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>noun</CardTitle>
          </CardHeader>
          <CardContent>
            <div>
              <p>
                {" "}
                1. Something that is representative of all such things in a
                group.
              </p>
            </div>
            <div>
              <p> 2. Something that serves to illustrate or explain a rule.</p>
            </div>
            <div>
              <p>
                {" "}
                3. Something that serves as a pattern of behaviour to be
                imitated (a good example) or not to be imitated (a bad example).
              </p>
            </div>
            <div>
              <p> 4. A person punished as a warning to others.</p>
            </div>
            <div>
              <p>
                {" "}
                5. A parallel or closely similar case, especially when serving
                as a precedent or model.
              </p>
            </div>
            <div>
              <p>
                {" "}
                6. An instance (as a problem to be solved) serving to illustrate
                the rule or precept or to act as an exercise in the application
                of the rule.
              </p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>verb</CardTitle>
          </CardHeader>
          <CardContent>
              <CardDescription>
                {" "}
                1. To be illustrated or exemplified (by).
              </CardDescription>
          </CardContent>
        </Card>
    </Card>
  );
};
