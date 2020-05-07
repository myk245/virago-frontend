import React from 'react'; 
import { Card, ListGroup } from 'react-bootstrap'; 
import Help from './Help'; 

const Resources = () => {
   return (
      <div className="center-container">
         <Card className="center-container" style={{ width: '60rem' }} border="info">
            <Card.Header class="text-primary"><h3>Resources</h3></Card.Header>
            <Card.Body>
               <Card.Subtitle class="text-muted">If you or someone you know is struggling with a mental health disorder, the below resources are helpful starting points for getting more information and finding the help you need. <em>For urgent or emergency help, please contact 911.</em></Card.Subtitle>
               <br></br>
               <ListGroup variant="flush">
                  <ListGroup.Item><strong><Card.Link href="https://www.nami.org/Home">National Alliance on Mental Illness</Card.Link></strong>: "the nation's largest grassroots mental health organization dedicated to building better lives for the millions of Americans affected by mental illness."</ListGroup.Item>
                  <ListGroup.Item><strong><Card.Link href="https://suicidepreventionlifeline.org/">National Suicide Prevention Lifeline</Card.Link></strong>: "provides 24/7, free and confidential support for people in distress, prevention and crisis resources for you or your loved ones, and best practices for professionals".</ListGroup.Item>
                  <ListGroup.Item><strong><Card.Link href="https://afsp.org/">American Foundation for Suicide Prevention</Card.Link></strong>: "dedicated to saving lives and bringing hope to those affected by suicide".</ListGroup.Item>
                  <ListGroup.Item><strong><Card.Link href="https://www.psychologytoday.com/us/psychiatrists">Psychology Today</Card.Link></strong>: search for a mental health professional in your area -- lists details such as specialty, contact information, qualifications, and insurance accepted</ListGroup.Item>
                  <ListGroup.Item><strong><Card.Link href="https://adaa.org/">Anxiety and Depression Association of America</Card.Link></strong>: "an international nonprofit organization dedicated to the prevention, treatment, and cure of anxiety, depression, OCD, PTSD, and co-occurring disorders through education, practice, and research". </ListGroup.Item>
                  <ListGroup.Item><strong><Card.Link href="https://www.samhsa.gov/">Substance Abuse and Mental Health Services Administration</Card.Link></strong>: "SAMHSA's mission is to reduce the impact of substance abuse and mental illness on America's communities".</ListGroup.Item>
                  <ListGroup.Item><strong><Card.Link href="https://www.thetrevorproject.org/">The Trevor Project</Card.Link></strong>: "leading national organization providing crisis intervention and suicide prevention services to lesbian, gay, bisexual, transgender, queer & questioning (LGBTQ) young people under 25".</ListGroup.Item>
                  <ListGroup.Item><strong><Card.Link href="https://www.veteranscrisisline.net/">Veterans Crisis Line</Card.Link></strong>: a free, confidential resource that is available to anyone. Responders are specially trained and experienced in helping Veterans.</ListGroup.Item>
                  <ListGroup.Item><strong><Card.Link href="https://childmind.org/">Child Mind Institute</Card.Link></strong>: "an independent, national nonprofit dedicated to transforming the lives of children and families struggling with mental health and learning disorders".</ListGroup.Item>
                  <ListGroup.Item><strong><Card.Link href="https://www.talkspace.com/">TalkSpace</Card.Link></strong>: offers online therapy and also provides access to public therapy forums</ListGroup.Item>
               </ListGroup>
            </Card.Body>
         </Card>
         <br></br>
         <Help />
      </div>
   )
}

export default Resources; 